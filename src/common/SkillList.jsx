function SkillList({ src, skill, link }) {
  return (
    <span>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="skillLink"
        >
          <img src={src} alt="Checkmark Icon" />
          <p>{skill}</p>
        </a>
      ) : (
        <>
          <img src={src} alt="Checkmark Icon" />
          <p>{skill}</p>
        </>
      )}
    </span>
  );
}

export default SkillList;
