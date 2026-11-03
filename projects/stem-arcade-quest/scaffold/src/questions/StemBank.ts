export interface StemQuestion {
  id: string;
  category: 'Math' | 'Physics' | 'Logic' | 'Coding';
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}


export const STEM_QUESTIONS: StemQuestion[] = [
  {
    id: 'math-01',
    category: 'Math',
    prompt: 'A Mars rover travels 4.5 meters per second. How far does it travel in 12 seconds?',
    options: ['48 meters', '54 meters', '52.5 meters', '60 meters'],
    correctIndex: 1,
    explanation: 'Distance = Velocity * Time: 4.5 * 12 = 54 meters.'
  },
  {
    id: 'physics-01',
    category: 'Physics',
    prompt: 'According to Newtons Third Law of Motion, for every action force there is:',
    options: ['A greater opposite force', 'An equal and opposite reaction force', 'A constant perpendicular velocity', 'No resultant force'],
    correctIndex: 1,
    explanation: 'Forces always occur in matched equal and opposite action-reaction pairs.'
  },
  {
    id: 'coding-01',
    category: 'Coding',
    prompt: 'In binary notation, what decimal integer value does the binary string 1011 represent?',
    options: ['9', '11', '13', '15'],
    correctIndex: 1,
    explanation: '8*1 + 4*0 + 2*1 + 1*1 = 8 + 0 + 2 + 1 = 11.'
  },
  {
    id: 'logic-01',
    category: 'Logic',
    prompt: 'If gate A is true and gate B is false, what does the Boolean expression (A AND (NOT B)) evaluate to?',
    options: ['True', 'False', 'Undefined', 'Null'],
    correctIndex: 0,
    explanation: 'NOT False is True; True AND True equals True.'
  }
];
