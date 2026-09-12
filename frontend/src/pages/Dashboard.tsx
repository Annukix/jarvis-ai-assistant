import { VoiceInput } from '../components/VoiceInput';
import { DailyBriefing } from '../components/DailyBriefing';
import { TaskList } from '../components/TaskList';
import { ScheduleCard } from '../components/ScheduleCard';

export function Dashboard() {
  return (
    <main style={{ padding: 16, display: 'grid', gap: 12 }}>
      <h1>Jarvis Dashboard</h1>
      <VoiceInput />
      <DailyBriefing />
      <TaskList />
      <ScheduleCard />
    </main>
  );
}
