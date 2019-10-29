import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
  }

  render () {
    const {title} = this.props;

    return (
      <section className={styles.component}>
        <h4 className={styles.title}>{title}</h4>
      </section>
    );
  }
}

export default Card;