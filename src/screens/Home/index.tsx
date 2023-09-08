import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {
  const participants = ['Lucas', 'Gabriel', 'Ana Paula', 'Lucimar', 'Murilo', 'Fernando', 'Leonardo', 'André', 'Pedro', 'Anderson', 'Jéssica', 'Nicole']

  function handleParticipantAdd() {
    console.log('Você clicou no botão de adicionar!');
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou no botão de remover no participante ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput 
            style={styles.input}
            placeholder='Nome do participante'
            placeholderTextColor='#6B6B6B'
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>
                +
            </Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {
          participants.map(participant => (
          <Participant key={participant} name={participant} onRemove={handleParticipantRemove} />
          ))
        }
      </ScrollView>
    </View>
  );
}