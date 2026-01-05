export const siteConfig = {
  name: "Yong-Zhe Zhang",
  title: "I am a disciplined and proactive learner with a interest in image processing and computer vision. I enjoy tackling technical challenges through thoughtful engineering and collaborative problem-solving.",
  description: "Portfolio website of Yong-Zhe Zhang",
  photo: "/data/photo.jpg", // Default placeholder
  aboutMePhoto: "/data/aboutmephoto.jpg", // Photo for About Me section
  accentColor: "#1d4ed8",
  site: "https://example.com", // Add site URL for SEO (best practice)
  social: {
    email: "asd91020907@gmail.com",
    linkedin: "https://www.linkedin.com/in/%E8%A9%A0%E5%93%B2-%E5%BC%B5-b7254833a/",
    resume: "/data/Resume.pdf", // Path to resume PDF
    github: "https://github.com/zyz-2299mod10",
  },
  aboutMe:
    "I am a disciplined, conscientious, and motivated learner interested in computer science, with project and research experience in deep learning, computer vision, image processing, medical AI, and robotics.\n I completed my undergraduate studies in Computer Science and Biotechnology at NYCU and am currently pursuing a master’s degree at NTU BEBI, where my work involves medical imaging, computer vision and deep learning advised by Professor Ruey-Feng Chang in CAD Lab. My past research includes vision-based robotics and trajectory planning advised by Professor Yi-Ting Chen in Human-centered Intelligent Systems Lab.\n These experiences have strengthened my ability to break down complex problems and build practical systems through careful experimentation and collaboration.\nOutside of work, I enjoy drawing and working out.",
  skills: ["Python", "C++", "C", "PyTorch", "TensorFlow"],
  projects: [
    {
      name: "TAS-LayerD",
      description:
        "Developed a framework for graphic-design image layer decomposition and reconstruction, enabling reliable separation of text, objects, and backgrounds with high visual coherence.",
      link: "https://github.com/zyz-2299mod10/TAS-LayerD",
      skills: ["Layer Decomposition", "Computer Vision", "Digital Image Processing", "Python"],
    },
    {
      name: "Video Enhancer",
      description:
        "Developed a framework to improve the image quality and to develop new functionalities of a USB camera. Including barrel distortion adjustment, under- and over-exposure correction, white balance, image super-resolution.",
      link: "https://github.com/zyz-2299mod10/Video-Enhancer",
      skills: ["Computational Photography", "Digital Image Processing", "Python"],
    },
    {
      name: "Medical Image Segmentation",
      description:
        "Developed a medical image segmentation model using a UNet-Transformer architecture with Masked Autoencoder self-supervised pretraining to improve feature representation and segmentation performance.",
      link: "https://github.com/zyz-2299mod10/ML/tree/main/HW3",
      skills: ["Medical Image", "Computer Vision", "Python"],
    },
    {
      name: "Coarse pose Insertion with Keypoint Detection",
      description:
        "Developed a vision-based peg insertion framework for complex geometries by keypoint prediction and integrating a corner prediction algorithm for precise hole pose estimation.",
      link: "https://github.com/zyz-2299mod10/PDM/tree/main/CourseProject",
      skills: ["Robotics", "Computer Vision", "Python"],
    },
  ],
  experience: [
    {
      company: "CAD Lab, NTU",
      title: "Graduate Research Student — Medical Imaging & Deep Learning",
      dateRange: "Sep 2025 – Present",
      bullets: [
        "Conducting research training in deep learning for medical imaging and computer-aided diagnosis, including dataset preprocessing and exploratory analysis.",
        "Reviewed prior literature and reproduced baseline models to support upcoming thesis research and experiment design.",
      ],
    },
    {
      company: "HCIS Lab, NYCU",
      title: "Undergraduate Research Student — Robotics & Computer Vision",
      dateRange: "Sep 2023 – Jun 2025",
      bullets: [
        "Developed a 4-DOF peg-hole pose estimation and collision-free trajectory planning framework using 3D vision and image processing.",
        "Collaborated with graduate research students in an industry-academia project, contributing algorithm design and experimental validation.",
      ],
    },
  ],
  education: [
    {
      school: "National Taiwan University",
      degree: "M.S. in Biomedical Electronics and Bioinformatics",
      dateRange: "2025 - Present",
      achievements: [],
    },
    {
      school: "National Yang Ming Chiao Tung University",
      degree: "B.S. Double Major in Computer Science and Biotechnology",
      dateRange: "2020 - 2025",
      achievements: [],
    },
  ],
  courses: [
    {
      name: "Deep Learning in Computer Vision",
      description: "The course covers a broad spectrum of modern computer vision topics, ranging from fundamental self-supervised learning to advanced generative models, vision-language models, and 3D scene representation.",
      link: "https://github.com/zyz-2299mod10/DLCV",
      skills: ["Image Segmentation", "Generative Models", "Vision-Language Models", "3D Reconstrucion", "Computer Vision", "Python"],
    },
    {
      name: "Digital Image Processing",
      description: "The course covers fundamental image processing techniques, including demosaicing, color balancing, tone mapping, image filtering, intensity transformations, JPEG compression, morphological operations, and image reconstruction.",
      link: "https://github.com/zyz-2299mod10/DIP",
      skills: ["Computational Photography", "Digital Image Processing", "Python"],
    },
    {
      name: "Machine Learning",
      description: "The course covers a wide range of topics from fundamental machine learning algorithms to advanced deep learning architectures and generative models.",
      link: "https://github.com/zyz-2299mod10/ML",
      skills: ["Machine Learning", "Deep Learning", "Python"],
    },
    {
      name: "Perception and Decision Making in Intelligent Systems",
      description: "The course establish a framework for intelligent systems. Topics span from 3D scene reconstruction, semantic navigation, and robotic manipulation kinematics to an end-to-end autonomous driving system.",
      link: "https://github.com/zyz-2299mod10/PDM",
      skills: ["Robotics", "Computer Vision", "Python"],
    },
    {
      name: "Parallel Programming",
      description: "The course introduces parallel computing paradigms ranging from SIMD and Pthreads to MPI, and extends to heterogeneous computing with CUDA and OpenCL.",
      link: "https://github.com/zyz-2299mod10/Parallel-Programming",
      skills: ["Parallel Programming", "CUDA", "OpenCL", "MPI", "Pthreads", "C++"],
    },
  ],
  // moments: [
  //   {
  //     title: "My First Moment",
  //     description: "This is a summary of my first moment where I discuss...",
  //     link: "/moments/first-article",
  //   },
  // ],
};
