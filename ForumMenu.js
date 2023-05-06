import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

const ForumMenu = () => {
  const [questions, setQuestions] = useState([
    { id: 1, title: 'Apa saja makanan yang harus dihindari saat hamil?', content: 'Saya ingin tahu makanan-makanan apa saja yang sebaiknya dihindari saat sedang hamil' },
    { id: 2, title: 'Bagaimana cara mengatasi mual-mual saat hamil?', content: 'Saya sedang hamil dan sering merasakan mual, apakah ada cara mengatasinya?' },
    { id: 3, title: 'Apakah aman menggunakan lotion anti-stretch mark saat hamil?', content: 'Saya ingin menggunakan lotion anti-stretch mark untuk mencegah timbulnya stretch mark pada perut saat hamil, apakah aman?' },
  ]);

  const handlePress = () => {
    // Handle press on "Ask a Question" button
    fetch(`${url}/api/ask-question`)
      .then(function(response) {
        return response.json()
      })
      .catch(function(e) {
        console.error(e);
      });
  };

  return (
    <View style={styles.container}>
      <Header
        centerComponent={{ text: 'PregBud', style: { color: '#fff', fontSize: 24 } }}
        backgroundColor='blue'
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Ask a Question</Text>
      </TouchableOpacity>
      <Text style={styles.heading}>Recent Questions</Text>
      {questions.map((question) => (
        <TouchableOpacity key={question.id} style={styles.questionContainer}>
          <Text style={styles.questionTitle}>{question.title}</Text>
          <Text style={styles.questionContent}>{question.content}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  button: {
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  questionContainer: {
    backgroundColor: '#F5F5F5',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  questionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  questionContent: {
    fontSize: 16,
  },
});

export default ForumMenu;
