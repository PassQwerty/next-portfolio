interface Project {
  id: number;
  date: Date;
  img: string;
  name: string;
  description: string;
  allDescription: string;
  tags: string[];
  source: string;
  demo: string;
}

interface RestProjectProps {
  newImg: string;
  newName: string;
  newDescription: string;
  newAllDescription: string;
  newTags: string[];
  newSource: string;
  newDemo: string;
}

interface CreateDataAllArgs {
  projects: RestProjectProps[];
}

interface ProjectItemProps {
  id;
  img: string;
  name: string;
  description: string;
  allDescription: string;
  tags: string[];
  source: string;
  demo: string;
}

interface MotionDelayProps {
  currentDelay: number;
  direction?: "x" | "y";
  countDirection?: number;
}

interface ProjectViewProps {
  data: Project[];
  delay?: number;
  sliceData?: number;
}

interface ContactPropsIcon {
  icon: IconType;
  title: string;
  link: string;
  styleIcon: string;
}

interface IconProps {
  icon: IconType;
  title: string;
}

interface Icons {
  headerText: string;
  items: Item[];
}

interface UpdateProjectArgs {
  name: string;
  property: keyof Project;
  newProperty: string | string[];
}
