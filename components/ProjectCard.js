import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

const ProjectCard = ({ title, description, githubUrl }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
      {githubUrl && (
        <Text style={styles.githubLink} onPress={() => Linking.openURL(githubUrl)}>
          View on GitHub
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  githubLink: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});

export default ProjectCard;


