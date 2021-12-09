const Card = () => {
  return (
    <section
      className={styles.card}
      key={Math.random() + hamster.id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hamster.imgName.startsWith("hamster") ? (
        <img
          src={`/img/${hamster.imgName}`}
          alt={hamster.name}
          key={hamster.id}
          className="card__img"
        />
      ) : (
        <img
          src={`https://2.bp.blogspot.com/-pouqaw_aiRU/TqljDfGtkDI/AAAAAAAAB_M/kIpYg8Y_on4/s400/ugly-hamsters2.jpg`}
          alt={hamster.name}
          key={hamster.id}
          className="card__img"
        />
      )}
      <div className={styles.card__body}>
        <h2 className={styles.card__title} style={{ display: `${showName}` }}>
          {hamster.name}
        </h2>

        <div>
          {showText && (
            <>
              <section className={styles.card__section__details}>
                <p>
                  Age: <span>{hamster.age}</span>
                </p>
                <p>
                  FavFood: <span>{hamster.favFood}</span>
                </p>
                <p>
                  Loves: <span>{hamster.loves}</span>
                </p>
                <p>
                  Wins: <span>{hamster.wins}</span>
                </p>
                <p>
                  Defeats: <span>{hamster.defeats}</span>
                </p>
                <p>
                  Games: <span>{hamster.games}</span>
                </p>
              </section>
              <button
                className={styles.card__delete}
                onClick={() => {
                  DeleteHamster(hamster.id);
                  removeHamsterObject(hamster.id);
                }}
              >
                Delete?
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Card;
