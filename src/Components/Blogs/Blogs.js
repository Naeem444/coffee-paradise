import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='article-container'>
            <article>
                <h1>
                What is context API? Purpose of the Context API
                </h1>
                <small>Md.Naeemur Rahman <FontAwesomeIcon className='circle-icon' icon={faCircle}></FontAwesomeIcon> 1 min read </small>
                <p>
                The Context API is a way to share values like props, but with less overhead. It allows you to pass data through the component tree without having to pass props down manually at every level. In a way, it makes the data available globally to the React tree.

                One major advantage of the Context API is that you can avoid prop drilling, which is the process of passing props down through multiple levels of components just to get to the components that need the data. This can become very cumbersome in large React apps with deep component hierarchies. With the Context API, you can create a context provider at a high level in the component tree and then consume the context in any child component, regardless of how deep it is nested.
                </p>

            </article>
            <article>
            <h1>
            Difference between inline, block, inline-block elements
                </h1>
                <small>Md.Naeemur Rahman <FontAwesomeIcon className='circle-icon' icon={faCircle}></FontAwesomeIcon> 1 min read </small>
                <p>
                n HTML, elements can be displayed in four different ways:

                    1. Inline: Inline elements are elements that are placed inline with the text. They only take up as much width as needed, and they do not create a new line after the element. Examples of inline elements include the a, span, and img tags.

                    2. Block: Block elements are elements that take up the full width of their parent container, and they create a new line after the element. Examples of block elements include the div, h1, and p tags.

                    3. Inline-block: Inline-block elements are elements that are placed inline with the text, but they behave like block elements. They only take up as much width as needed, but they create a new line after the element. Examples of inline-block elements include the button and input tags.

                    4. None: The none value removes an element from the document flow and takes up no space.
                </p>

            </article>
            <article>
            <h1>
            Quick Overview of Semantic Tags in HTML
                </h1>
                <small>Md.Naeemur Rahman <FontAwesomeIcon className='circle-icon' icon={faCircle}></FontAwesomeIcon> 1 min read </small>
                <p>
                In HTML, semantic tags are tags that accurately describe the content they contain. Using semantic tags helps to improve the accessibility and SEO of a webpage, as well as making the code easier to read and understand.

                Some examples of semantic tags include:

                header: This tag represents the header of a webpage or section. It can contain a logo, navigation, and other information about the webpage or section.

                nav: This tag represents a section of the webpage that contains navigation links.

                main: This tag represents the main content of the webpage. It should not be used more than once per page.

                article: This tag represents an independent piece of content, such as a blog post or news article.

                section: This tag represents a section of the webpage that has a specific theme or purpose.

                aside: This tag represents content that is related to the main content, but is separate from it. It is often used for sidebars or pull-quotes.

                footer: This tag represents the footer of a webpage or section. It can contain copyright information, links to legal documents, and other information.

                It is important to use semantic tags appropriately to ensure that the content of the webpage is properly structured and can be understood by both humans and machines.

                </p>

            </article>
        </div>
    );
};

export default Blogs;