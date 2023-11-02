import Image from 'next/image';
import Link from 'next/link';
import StudentInfo from './StudentInfo';

export default function Home() {
  return (
    <main style={styles.container}>
      <h1 style={styles.header}>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <div style={styles.linkContainer}>
        <Link href="/week2" style={styles.link}>
          Week 2
        </Link>
      </div>
      <div style={styles.linkContainer}>
        <Link href="/week3" style={styles.link}>
          Week 3
        </Link>
      </div>
      <div style={styles.linkContainer}>
        <Link href="/week4" style={styles.link}>
          Week 4
        </Link>
      </div>
      <div style={styles.linkContainer}>
        <Link href="/week5" style={styles.link}>
          Week 5
        </Link>
      </div>
      <div style={styles.linkContainer}>
        <Link href="/week6" style={styles.link}>
          Week 6
        </Link>
      </div>
      <div style={styles.linkContainer}>
        <Link href="/week7" style={styles.link}>
          Week 7
        </Link>
      </div>
      <div style={styles.linkContainer}>
        <Link href="/week8" style={styles.link}>
          Week 8
        </Link>
      </div>
    </main>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    padding: '40px',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '40px auto',
    textAlign: 'center'
  },
  header: {
    color: '#2c3e50',
    marginBottom: '30px'
  },
  linkContainer: {
    margin: '10px 0'
  },
  link: {
    display: 'inline-block',
    backgroundColor: '#3498db',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
    transition: 'background-color 0.3s'
  }
};
