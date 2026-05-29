import DashboardShell from "@/components/dashboard/DashboardShell";
import HeroTile from "@/components/dashboard/HeroTile";
import ActivityTile from "@/components/dashboard/ActivityTile";
import CourseCard from "@/components/dashboard/CourseCard";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { Course } from "@/types/course";
import BentoGrid from "@/components/dashboard/BentoGrid";

export default async function Home() {
  const supabase = createSupabaseServerClient();
  await new Promise((resolve) => setTimeout(resolve, 1200));

  const { data: courses, error } = await supabase.from("courses").select("*");
  if (error) {
    return <p>Database failed</p>;
  }

  return (
    <DashboardShell>
      <BentoGrid>
        <HeroTile />
        {courses?.map((course: Course) => (
          <CourseCard key={course.id} course={course} />
        ))}
        <ActivityTile />
      </BentoGrid>
    </DashboardShell>
  );
}
