import { StyleSheet, Text, View } from 'react-native';

type PlaceholderScreenProps = {
  description: string;
  icon: string;
  title: string;
};

export function PlaceholderScreen({ description, icon, title }: PlaceholderScreenProps) {
  return (
    <View style={styles.screen}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.note}>
        <Text style={styles.noteText}>This space is coming together.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    backgroundColor: '#F7F0E5',
    flex: 1,
    justifyContent: 'center',
    padding: 32,
  },
  icon: {
    fontSize: 42,
    marginBottom: 18,
  },
  title: {
    color: '#273B32',
    fontFamily: 'Georgia',
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
  },
  description: {
    color: '#626056',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 12,
    maxWidth: 290,
    textAlign: 'center',
  },
  note: {
    backgroundColor: '#FFFDF8',
    borderColor: '#E5D7C3',
    borderRadius: 12,
    borderWidth: 1,
    marginTop: 28,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  noteText: {
    color: '#8A684F',
    fontSize: 13,
    fontWeight: '600',
  },
});
