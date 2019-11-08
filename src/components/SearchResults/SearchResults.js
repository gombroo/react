import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResults.scss';
import Card from '../Card/Card';

class SearchResults extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    cards: PropTypes.array,
  };

  render() {
    const {cards, title} = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {title}
        </h3>
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </section>
    );
  }
}

export default SearchResults;