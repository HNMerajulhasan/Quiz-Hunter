import React from 'react';
import Button from 'react-bootstrap/Button';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container blog'>
            <h1 className='text-center blog-h1'>Read Your <span className='span-color'>Favorite Blog !!</span></h1>
            <div className='my-5 blog-1'>
                <h1 className='span-color'>1. what is the purpose of react router?</h1>
                <p className='my-5 fs-5'>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.

                    React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.......</p>
                <Button className='px-5 py-2 fs-4 bg-color text-white' variant="">Read More...</Button>{' '}
            </div>
            <div className='my-5 blog-2'>
                <h1 className='span-color'>2. how does context api work?</h1>
                <p className='my-5 fs-5'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

                    Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.

                    React context API: How it works?
                    React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page.........</p>
                <Button className='px-5 py-2 fs-4 bg-color text-white' variant="">Read More....</Button>{' '}
            </div>
            <div className='my-5 blog-3'>
                <h1 className='span-color'>3. What is Use Ref?</h1>
                <p className='my-5 fs-5'>In the typical React dataflow, props are the only way that parent components interact with their children. To modify a child, you re-render it with new props. However, there are a few cases where you need to imperatively modify a child outside of the typical dataflow. The child to be modified could be an instance of a React component, or it could be a DOM element. For both of these cases, React provides an escape hatch.There are a few good use cases for refs:

                    Managing focus, text selection, or media playback.
                    Triggering imperative animations.
                    Integrating with third-party DOM libraries.
                    Avoid using refs for anything that can be done declaratively.

                    For example, instead of exposing open() and close() methods on a Dialog component, pass an isOpen prop to it........
                </p>
                <Button className='px-5 py-2 fs-4 bg-color text-white' variant="">Read More....</Button>{' '}
            </div>
        </div>
    );
};

export default Blog;