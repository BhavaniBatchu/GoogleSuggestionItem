import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput = '',
  }

  updateSearchInput = value => {
    this.setState({
      searchInput: value,
    })
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {SuggestionList} = this.props
    const searchResults = SuggestionList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLocaleLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="google-suggestions-contianer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google-logo"
            className="google-logo"
          />
          <div className="search-input-suggestions-container">
            <div className="suggestions-contianer">
              <img
                alt="search-logo"
                className="search-input-container"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              />
              <input
                type="search"
                className="search-input"
                placeholder="Search Google"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
            <ul className="suggestions-list">
              {searchResults.map(eachSuggestion => (
                <SuggestionItem
                  key={eachSuggestion.id}
                  suggestionDetails={eachSuggestion}
                  updateSearchInput={this.updateSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
