import React, {useState} from 'react';
import Header from './components/Header'
import Form from './components/Form'
import Summary from './components/Summary'
import Results from './components/Results'
import Spinner from './components/Spinner'



import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {

  const [summary, handelSummary] = useState({
    quote: 0,
    data: {
      make: '',
      year: '',
      plan: ''
    }
  });

  const [loading, handelLoading] = useState(false)
  const { data, quote} = summary;
  return (
    <Container>
      <Header 
        title="Insurance Quote"
      />
      <FormContainer>
        <Form
          handelSummary={handelSummary}
          handelLoading={handelLoading}
        />
        { loading ? <Spinner /> : null}
        <Summary
          data={data}
        />
        <Results
          quote={quote}
        />
      </FormContainer>
    </Container>
  );
}

export default App;
