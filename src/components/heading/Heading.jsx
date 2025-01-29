

const Heading = ({title, subtitle}) => {
    return (
        <div className="text-center mx-auto">
            <h3 className="text-3xl font-bold">{title}</h3>
            <p>{subtitle}</p>
        </div>
    );
};

export default Heading;