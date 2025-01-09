import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ProjectCard from './components/ProjectCard';

const App = () => {
  const projects = [
    {
      id: '1',
      title: 'Simple Image Classifier (Python AI)',
      description: 'A basic image classifier using TensorFlow and Python. Demonstrates fundamental concepts of image classification.',
      githubUrl: 'https://github.com/yourusername/simple_image_classifier',
    },
    {
      id: '2',
      title: 'E-commerce Product Catalog (Web Dev)',
      description: 'A front-end focused e-commerce product catalog built with HTML, CSS, and JavaScript. Showcases responsive design and product display.',
      githubUrl: 'https://github.com/yourusername/e-commerce_product_catalog',
    },
    {
      id: '3',
      title: 'My First React Native App',
      description: 'A simple React Native application to get started with mobile development.',
      githubUrl: 'https://github.com/yourusername/my-first-rn-app',
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


