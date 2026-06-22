
import { useState } from 'react';
import './Home.css';

const Home = () => {
      const [count, setCount] = useState(0)
    return (
        
            <>
        <div className="counter">
            <h2>My Journy in React</h2>
            
        </div>
        <p>our platform offers a wide range of courses and resources to help you achieve your educational goals. Whether you're looking to learn a new skill, advance your career, 
            or explore a new subject, we have something for everyone. Our team of experienced instructors and educators are dedicated to providing high-quality content and support to help you succeed.
             Join our community today and start your learning journey!</p>
        <div >
        <h2>Count is {count}</h2>
            
        <button onClick={() => setCount((count) => count + 1)}>
            increment
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
           decrement
        </button>
        <button onClick={() => setCount((0) )}>
           reset
        </button>
        </div>
        </>
    );
}

export default Home;
