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

  return (
    <div className="hero min-h-[40vh]" style={{ backgroundImage: `url(${subscribeItems._embedded["wp:featuredmedia"][0].source_url})`, backgroundPosition: "50% 15%" }}>
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center lg:text-left text-neutral-content justify-between w-full flex-col lg:flex-row">
        <div className="flex flex-col gap-y-5">
          <h1 className="text-4xl sm:text-6xl font-bold">{subscribeItems.title.raw}</h1>
          <p className="text-xl sm:text-2xl">{subscribeItems.content.raw}</p>
          <p className="">Test Result: {result}</p>
        </div>

          <div className="flex flex-row items-center">
              <input 
              type="email" 
              id="email-input"
              name="email"
              placeholder="Enter your email"
              ref={inputRef}
              required
              autoCapitalize='off'
              autoCorrect='off'
              className="text-neutral input input-sm md:input-md lg:input-lg input-bordered rounded-r-none"
            />
              <button onClick={submitHandler} value={inputRef} name="subscribe" className="btn btn-primary btn-sm md:btn-md lg:btn-lg self-center rounded-l-none">
                Subscribe
              </button>
          </div>
      </div>
    </div>
  )
}

export default Subscribe;