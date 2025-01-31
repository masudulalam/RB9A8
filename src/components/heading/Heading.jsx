

const Heading = ({title, subtitle}) => {
    return (
        <div className="text-center mx-auto">
            <h3 className="text-3xl font-bold mt-8 mb-4">{title}</h3>
            <p className="w-3xl mx-auto mb-8">{subtitle}</p>
        </div>
    );
};

export default Heading;