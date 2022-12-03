import axios from 'axios';

// api route and call to mailchimp API when users subscribe to happyherd newsletter

export default async (req, res) => {
  const { email } = req.body;
  console.log({ email });

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  };

  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const DATACENTER = process.env.MAILCHIMP_API_SERVER;
  const MAILCHIMP_API_URL = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  const data = {
    email_address: email,
    status: 'subscribed',
  };

  axios.post(MAILCHIMP_API_URL, data, {
    headers: {
      Authorization: `apikey ${API_KEY}`,
      'Content-Type': 'application/json'
    }
  })
  .then((res) => {
    console.log('res', res.response.data);
    return res.status(err.response.status).json(err.response.data);
  })
  .catch((err) => {
    console.log('err.response', err.response.data);
    return res.status(err.response.status).json(err.response.data);
  });
};