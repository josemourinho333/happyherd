import { useState, useRef } from 'react';
import axios from 'axios';

const Subscribe = ({subscribeItems}) => {
  const [result, setResult] = useState('');
  const inputRef = useRef('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submit button clicked');
    console.log('inputref', inputRef.current.value); 

    const apiEndpoint = process.env.NEXT_API_URL + "/api/subscribeUser";

    axios.post(apiEndpoint, {
      email: inputRef.current.value
    })
    .then((res) => {
      console.log('res', res);
      setResult(err.response.data.title);
    })
    .catch((err) => {
      console.log('err', err);
      setResult(err.response.data.title);
    })
  };

  console.log('sub', subscribeItems);

  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url(${subscribeItems._embedded["wp:featuredmedia"][0].source_url})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl font-bold">{subscribeItems.title.raw}</h1>
          <p className="mb-5 text-2xl">{subscribeItems.content.raw}</p>
          <p className="mb-5">Test Result: {result}</p>
          <div className="w-full flex flex-col">
              <input 
              type="email" 
              id="email-input"
              name="email"
              placeholder="Enter your email"
              ref={inputRef}
              required
              autoCapitalize='off'
              autoCorrect='off'
              className="text-neutral input input-bordered"
            />
            <button onClick={submitHandler} value={inputRef} name="subscribe" className="btn btn-primary mt-5 self-center">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
    // <div className="flex flex-col lg:flex-row min-h-[70vh] bg-gradient-to-b from-black to-zinc-800 text-neutral-content">
    //   <div>
    //    Result: {result}
    //   </div>
      // <div>
      //   <form>
      //     <label htmlFor="email-input">
      //       Your Email
      //     </label>
      //     <input 
      //       type="email" 
      //       id="email-input"
      //       name="email"
      //       placeholder="Enter your email"
      //       ref={inputRef}
      //       required
      //       autoCapitalize='off'
      //       autoCorrect='off'
      //       className="text-neutral"
      //     />
      //   </form>
      //   <button onClick={submitHandler} value={inputRef} name="subscribe">
      //     Subscribe
      //   </button>
      // </div>
    // </div>
  )
}

export default Subscribe;