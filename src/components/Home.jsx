import React, { useContext, useEffect } from 'react'
import { CountriesList } from './CountriesList'
import { SearchBar } from './SearchBar'
import { SearchMenu } from './SearchMenu'
import { useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export const Home = () => {
    const [query, setQuery] = useState('')
    const [isDark] = useContext(ThemeContext)
  
  return (
    <main className={`${isDark? 'dark': ''}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SearchMenu setQuery={setQuery} />
      </div>
      <CountriesList query={query} />
    </main>
  )
}
