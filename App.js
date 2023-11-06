import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
} from 'react-native';
import Button from './components/Button';
import Row from './components/Row';

export default function App() {
  // State variables 
  const [displayValue, setDisplayValue] = useState('0'); 
  const [operator, setOperator] = useState(null); 
  const [firstValue, setFirstValue] = useState('');

  // Function to handle number inputs 
  const handleNumberInput = (num) => { 
    if (displayValue === '0') { 
      setDisplayValue(num.toString()); 
    } else { 
      setDisplayValue(displayValue + num); 
    } 
  }; 

  // Function to handle clear button press 
  const handleClear = () => { 
    setDisplayValue('0'); 
    setOperator(null); 
    setFirstValue(''); 
  };   

  // Function to handle operator inputs 
  const handleOperatorInput = (operator) => { 
    setOperator(operator); 
    setFirstValue(displayValue); 
    setDisplayValue('0'); 
  }; 

  // Function to handle equal button press 
  const handleEqual = () => { 
    const num1 = parseFloat(firstValue); 
    const num2 = parseFloat(displayValue); 

    if (operator === '+') { 
      setDisplayValue((num1 + num2).toString()); 
    } else if (operator === '-') { 
      setDisplayValue((num1 - num2).toString()); 
    } else if (operator === '*') { 
      setDisplayValue((num1 * num2).toString()); 
    } else if (operator === '/') { 
      setDisplayValue((num1 / num2).toFixed(3).toString()); 
    } 
    setOperator(null); 
    setFirstValue(''); 
  };   

  // handle change sign
  const handlePosneg = () => {
    setDisplayValue((displayValue * -1).toString());
  };

  // handle percentage
  const handlePercentage = () => {
    setDisplayValue((displayValue * 0.01).toString());
  };

  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.value}>
          {displayValue}
        </Text>
      </View>
      
      {/* Do create componentRow */}

      <Row>
        <Button text="C" theme="secondary" onPress={handleClear} />
        <Button text="+/-" theme="secondary" onPress={() => handlePosneg("+/-")} />
        <Button text="%" theme="secondary" onPress={() => handlePercentage("%")} />
        <Button text="/" theme="accent" onPress={() => handleOperatorInput("/")} />
      </Row>

      <Row>
        <Button text="7" onPress={() => handleNumberInput(7)} />
        <Button text="8" onPress={() => handleNumberInput(8)} />
        <Button text="9" onPress={() => handleNumberInput(9)} />
        <Button text="*" theme="accent" onPress={() => handleOperatorInput("*")} />
      </Row>

      <Row>
        <Button text="4" onPress={() => handleNumberInput(4)} />
        <Button text="5" onPress={() => handleNumberInput(5)} />
        <Button text="6" onPress={() => handleNumberInput(6)} />
        <Button text="-" theme="accent" onPress={() => handleOperatorInput("-")} />
      </Row>

      <Row>
        <Button text="1" onPress={() => handleNumberInput(1)} />
        <Button text="2" onPress={() => handleNumberInput(2)} />
        <Button text="3" onPress={() => handleNumberInput(3)} />
        <Button text="+" theme="accent" onPress={() => handleOperatorInput("+")} />
      </Row>

      <Row>
        <Button text="0" onPress={() => handleNumberInput(0)} />
        <Button text="." onPress={() => handleNumberInput(".")} />
        <Button text="=" theme="accent" onPress={() => handleEqual("=")} />
      </Row>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
  },
  value: {
    color: "#fff",
    fontSize: 42,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});
