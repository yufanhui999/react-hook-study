import React, { Component, createContext, useState, useContext } from 'react';

const themes = {
  light: {
    background: '#000000',
    foreground: '#eeeeee'
  },
  dark: {
    background: '#ffffff',
    foreground: '#333'
  }
}

// context 就是一个背景知识，所有人都应该知道的一个知识。
const ThemeContext = createContext({
  theme: themes.light,
  toggle: () => {},
})


function ContextExample() {
  const [theme, setTheme] = useState(themes.light)

  return (
    <ThemeContext.Provider value={{
      theme,
      toggle: () => {
        setTheme(theme => {
          setTheme(theme === themes.light ? themes.dark : themes.light)
        })
      }
    }}>
      <Toolbar />
    </ThemeContext.Provider>
  )
}

function Toolbar() {
  return (
    <ThemeButton />
  )
}

function ThemeButton() {
  const context = useContext(ThemeContext)
  return (
    <button 
      style={{
        color: context.theme.foreground,
        backgroundColor: context.theme.background
      }}
      onClick={() => context.toggle()}
    >click me</button>
  )
}
export default ContextExample