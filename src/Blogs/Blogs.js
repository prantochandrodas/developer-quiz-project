import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <div className='my-3'>
            <h2>1. what is the purpose of react router ?</h2>
            <p className='h3'>Ans:- ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>

            </div>
            <div className='my-3'>
                <h2>2. how does context api work</h2>
                <p className='h3'>Ans:- The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>

            </div>
            <div className='my-3'>
                <h2>3. what is useref in react</h2>
                <p className='h3'>Ans:- Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with  , React will set its .current property to the corresponding DOM node whenever that node changes.</p>

            </div>

        </div>
    );
};

export default Blogs;