export default function Success() {
    return (
      <div style={styles.container}>
        <h1>Thank You for Your Purchase!</h1>
        <p>Your purchase was successful. Click the button below to download your resume template.</p>
        <a href="/resume.pdf" download style={styles.button}>
          Download Resume Template
        </a>
      </div>
    );
  }
  
  const styles = {
    container: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#f0f4f8',
    },
    button: {
      marginTop: '20px',
      padding: '12px 24px',
      fontSize: '18px',
      backgroundColor: '#0070f3',
      color: '#fff',
      textDecoration: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };
  