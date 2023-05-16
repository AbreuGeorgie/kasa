function Host({ host }) {
    return (
        <>
        <img 
        src = {host.picture}
        alt = {`propriétaire`}>
        </img>
      <h3>
        {host.name}
      </h3>
      </>
    );
  }
  
  export default Host;