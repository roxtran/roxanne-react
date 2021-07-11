import styled from 'styled-components'

const Loader = ({ message }) => {
  return (
    <StyledLoader>
      <div className='loader' />
      <span className='loading-text'>{message ? message : 'Loading...'}</span>
    </StyledLoader>
  )
}
export default Loader

const StyledLoader = styled.div`
  .loader {
    margin: 0px auto;
    width: 64px;
    height: 64px;
    background-color: rgba(45, 51, 74, 60%);
    border-radius: 50%;
    animation: growAnimation 0.7s ease-in-out infinite;
  }

  @keyframes growAnimation {
    from {
      opacity: 1;
      transform: scale(0);
    }
    to {
      opacity: 0;
      transform: scale(1);
    }
  }
`
