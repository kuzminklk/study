

import './App.css'

import { useState, useEffect } from 'react'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'


const API_URL = 'http://localhost:3500/items'


function App() {


  // Model

  const [items, setItems] = useState([]);

  const [filter, setFilter] = useState(JSON.parse(localStorage.getItem('filter')) || '');

  const filteredItems = items.filter((item) => (((item.name).toLowerCase()).includes(filter.toLowerCase())));


  // Controllers -> CRUD Operations

  // Read
  async function readData() {
    try {
    const response = await fetch(API_URL);
    const data = await response.json();
    setItems(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    readData( );
  }, [])

  // Create
  async function handleSubmit(name) {
    const newItem = {
      'id': String(items.length),
      'checked': false,
      'name': name
    }

    const createOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
    }

    try {
      const response = await fetch(API_URL, createOptions);
    } catch (error) {
      console.error(error);
    }

    const newItems = [...items, newItem];
    setItems(newItems)
  }

  // Update
  async function handleCheck(id) {
    let newItem;
    const newItems = items.map((item) => item.id === id ? newItem = { ...item, checked: !item.checked } : item)
    setItems(newItems)

    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"checked": newItem.checked})
    }

    try {
      const response = await fetch(API_URL + '/' + id, updateOptions);
    } catch (error) {
      console.error(error); 
    }
  }

  // Delete
  async function handleDelete(id) {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)

    const deleteOptions = {
      method: 'DELETE'
    }

    try {
      const response = await fetch(API_URL + '/' + id, deleteOptions);
    } catch (error) {
      console.error(error);
    }
  }


  // View

  return (
    <>
      <Header title='List' />
      <Main items={filteredItems} handleCheck={handleCheck} handleDelete={handleDelete} handleSubmit={handleSubmit} setFilter={setFilter} filter={filter} />
      <Footer length={filteredItems.length} />
    </>
  )

}

export default App
