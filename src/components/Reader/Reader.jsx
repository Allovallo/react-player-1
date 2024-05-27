import { Component } from 'react';

export class Reader extends Component {
  state = {
    index: 0,
  };

  changeIndex = value => {
    this.setState(state => ({ index: state.index + value }));
  };

  // onPrev = () => {
  //   this.setState(state => ({ index: state.index - 1 }));
  // };

  // onNext = () => {
  //   this.setState(state => ({ index: state.index + 1 }));
  // };

  render() {
    const { index } = this.state;
    const { items } = this.props;
    const currentItem = items[index];
    const totalItems = items.length;

    return (
      <div>
        <section>
          <button type="button" disabled={index === 0} onClick={() => this.changeIndex(-1)}>
            Назад
          </button>
          <button
            type="button"
            disabled={index + 1 === totalItems}
            onClick={() => this.changeIndex(1)}
          >
            Вперед
          </button>
        </section>

        <p>
          {this.state.index + 1}/{items.length}
        </p>

        <article>
          <h2>{currentItem.title}</h2>
          <p>{currentItem.text}</p>
        </article>
      </div>
    );
  }
}
