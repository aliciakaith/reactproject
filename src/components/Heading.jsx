

const Heading = ( {className, title}) => {
  return (
  <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}> 
    {title && <h2 className="h2">{title}</h2>} 
  </div> /*checks if there is a title prop, if there is it renders an h2 element with the title text, if not it renders nothing. This allows the Heading component to be flexible and reusable in different contexts where a title may or may not be needed. */
)};

export default Heading;
