import React from 'react';
import Select from 'react-select';
 
const options = [
  { value: 'เครื่องเล่น1', label: 'เครื่องเล่น1' },
  { value: 'เครื่องเล่น2', label: 'เครื่องเล่น2' },
  { value: 'เครื่องเล่น3', label: 'เครื่องเล่น3' },
];
 
class SelectMachine extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;
 
    return (
    <>
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />

    </>
    );
  }
}

export default SelectMachine;