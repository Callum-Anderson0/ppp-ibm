import { useState } from 'react';
import AnalyseInput from './components/AnalyseInput';
import Dashboard from './components/Dashboard';
import { defaults } from './defaults.js';

function App() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [inputText, setInputText] = useState(defaults.defaultText);

  return (
    <>
      <AnalyseInput
        onResult={setResult}
        onError={setError}
        onInputText={setInputText}
      />
      <Dashboard
        result={result}
        error={error}
        inputText={inputText}
      />
    </>
  );
}

export default App;
