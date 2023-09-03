const Town = ({ title, description }) => {
  return (
    <section className="town">
      <div className="container">
        <h3 className="town__title title">{title}</h3>
        <p className="descr town__descr">{description}</p>
      </div>
    </section>
  );
};

export default Town;
