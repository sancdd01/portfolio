function IntroPanel() {
  return (
    <section className="intro-panel">
      <div className="intro-panel__inner">
        <p className="intro-panel__label">Built with intention</p>

        <h2 className="intro-panel__title">
          I build software that balances user experience, reliability, and real-world problem solving.
        </h2>

        <p className="intro-panel__text">
          From front-end interfaces to infrastructure issues, I like building systems that are clean,
          dependable, and thoughtful under the surface.
        </p>

        <div className="intro-panel__tags">
          <span>Front End</span>
          <span>Back End</span>
          <span>Cloud / Infra</span>
          <span>Systems Thinking</span>
        </div>
      </div>
    </section>
  );
}

export default IntroPanel;