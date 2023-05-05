import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='w-10/12 lg:w-8/12 mx-auto mb-12'>
                <h2 className='text-4xl font-bold text-center text-sky-400 mb-12'>Questions</h2>
                <div className='rounded-md drop-shadow-2xl bg-slate-50 border-2 p-6'>
                    <h2> <span className='font-bold text-sky-500'>Question-1: </span> Tell us the differences between uncontrolled and controlled components? </h2>
                    <hr />
                    <p className='mt-3 mb-10'>
                        The main difference between uncontrolled and controlled components lies in how the form input values are managed:
                        * Uncontrolled components are managed by the DOM and accessed using the ref attribute.
                        * Controlled components are fully managed by React and controlled through component state.
                        * Controlled components provide a single source of truth for form input values, making it easier to track and manage the state and perform actions based on the state changes.
                        * Controlled components offer more flexibility and control over form validation, conditional rendering, and interaction with other components.
                        * Uncontrolled components can be simpler to set up, especially for simple forms with few inputs, but they may lack fine-grained control and validation capabilities.
                    </p>
                </div>



                <div className='rounded-md drop-shadow-2xl bg-slate-50 border-2 p-6'>
                    <h2> <span className='font-bold text-sky-500'>Question-2: </span> How to validate React props using PropTypes?</h2>
                    <hr />
                    <p className='mt-3 mb-10'>
                        Props and PropTypes are important mechanisms for passing read-only attributes between React components.

                        We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.

                        Since JavaScript doesn’t have a built-in type checking solution, many developers use extensions like TypeScript and Flow. However, React has an internal mechanism for props validation called PropTypes. In this article, we’ll learn how to validate props with React PropTypes.
                    </p>
                </div>



                <div className='rounded-md drop-shadow-2xl bg-slate-50 border-2 p-6'>
                    <h2> <span className='font-bold text-sky-500'>Question-3: </span> Tell us the difference between nodejs and express js? </h2>
                    <hr />
                    <p className='mt-3 mb-10'>
                        Node.js is a runtime environment for executing JavaScript on the server-side, while Express.js is a framework built on top of Node.js that provides a set of tools and features for building web applications and APIs. Express.js simplifies the process of handling HTTP requests, routing, and middleware integration, making it a popular choice for building web applications with Node.js.
                    </p>
                </div>


                <div className='rounded-md drop-shadow-2xl bg-slate-50 border-2 p-6'>
                    <h2> <span className='font-bold text-sky-500'>Question-4: </span> What is a custom hook, and why will you create a custom hook? </h2>
                    <hr />
                    <p className='mt-3 mb-10'>

                        A custom hook is a feature in React, a popular JavaScript library for building user interfaces, that allows you to extract reusable logic from a component. It enables you to create a function that encapsulates common stateful logic and can be shared across multiple components.

                        In React, hooks are functions that let you use state and other React features without writing a class. While React provides several built-in hooks like useState and useEffect, you can also create your own custom hooks to abstract and reuse specific logic.
                    </p>
                </div>


            </div>

        </div>
    );
};

export default Blogs;