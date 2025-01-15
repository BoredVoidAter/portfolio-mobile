import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ProjectCard from './components/ProjectCard';

const App = () => {
  const projects = [
    {
      id: '1',
      title: 'CareerCompass AI',
      description: 'An AI-powered Resume/CV Analyzer and Job Recommender built with Flask, spaCy, HTML, CSS, and JavaScript.',
      githubUrl: 'https://github.com/BoredVoidAter/career-compass-ai.git',
    },
    {
      id: '2',
      title: 'Simple Image Classifier (Python AI)',
      description: 'A basic image classifier using TensorFlow and Python. Demonstrates fundamental concepts of image classification.',
      githubUrl: 'https://github.com/BoredVoidAter/simple-image-classifier.git',
    },
    {
      id: '3',
      title: 'E-commerce Product Catalog (Web Dev)',
      description: 'A front-end focused e-commerce product catalog built with HTML, CSS, and JavaScript. Showcases responsive design and product display.',
      githubUrl: 'https://github.com/BoredVoidAter/e-commerce-product-catalog.git',
    },
    {
      id: '4',
      title: 'My First React Native App',
      description: 'A simple React Native application to get started with mobile development.',
      githubUrl: 'https://github.com/BoredVoidAter/portfolio-mobile.git',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Portfolio App</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            githubUrl={project.githubUrl}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
});

export default App;


