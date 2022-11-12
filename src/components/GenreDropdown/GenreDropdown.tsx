import React, { ReactNode } from 'react';

export class GenreDropdown extends React.PureComponent<any, any> {
  options = [
    { label: 'Select genre', value: '' },
    { label: 'Crime', value: 'Crime' },
    { label: 'Documentary', value: 'Documentary' },
    { label: 'Horror', value: 'Horror' },
    { label: 'Comedy', value: 'Comedy' },
  ];
  constructor(props) {
    super(props);
    this.state = { options: this.options, value: '' };
  }

  handleChange = (event): void => {
    this.setState({ value: event.target.value });
  };

  render(): ReactNode {
    const { options, value } = this.state;

    return (
      <>
        <span className="genreDropdown">
          <select onChange={this.handleChange} value={value}>
            {options.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </span>
        <h1>Genre : {value}</h1>
      </>
    );
  }
}
