import React from 'react'

export default function About() {
  return (
    <div className='container m-5'>
      <h3 className='text-center text-danger'>ALL ABOUT TODOS</h3>
      <p>Hello User ! Welcome to our Todos List App. It is one of the apps with easiest interface to manage your todos for you daily, weekly and event monthly. We care for your busy schedules and long lists of tasks. We are here to help you and make everyting easy for you.  </p>
      <h2 className='text-success'> Features </h2>
      <p>Here are some basic features of our App. </p>
      <ul>
        <li>
          Adding Todos
        </li>
        <li>
          Saving Todos if left pending
        </li>
        <li>
          Deleting Todos
        </li>
      </ul>

      <h2 className='text-success'> Benefits </h2>
      <p>Using this app to keep a track of your chores can bring you great benefits </p>
      <ul>
        <li>
          Task Organization
        </li>
        <li>
          Clear Focus
        </li>
        <li>
          Time Tracking
        </li>
        <li>
          Visual Progress
        </li>
        <li>
          Mental Clarity
        </li>
        <li>
         Motivation
        </li>
      </ul>
      <p>A simple to-do list app might seem basic, but its benefits in enhancing productivity, reducing stress, and improving time management make it an essential tool for everyday life.</p>
    
    <p className='text-center'>Hope you have a great time using this app. <b> HAPPY WORKING !!</b></p>
    </div>
  )
}
