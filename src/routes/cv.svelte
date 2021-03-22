<script>
  import WorkItem from '../components/WorkItem.svelte';
  import EduItem from '../components/EduItem.svelte';
  import SkillItem from '../components/SkillItem.svelte'

  let skills =
  [
    {
      "category": "Programming Languages",
      "list": "<strong>C++</strong>, <strong>Python</strong>, Javascript, Java, Haskell, Elixir, R, x86-64 assembly, Erlang, Matlab, Rust, C#, Lua, Fortran, Chapel, Zig, etc."
    },
    {
      "category": "UI Frameworks",
      "list": "<strong>Qt</strong>, Swing, HTML/CSS, Svelte, D3."
    },
    {
      "category": "Real-time graphics",
      "list": "<strong>OpenGL</strong>, DirectX, Vulkan and Unreal."
    },
    {
      "category": "Parallel Programming",
      "list": "<strong>TBB</strong>, OpenMP, CUDA, OpenCL, Erlang, Chapel, Elixir, etc."
    },
    {
      "category": "VFX Tools",
      "list": "<strong>Maya, Houdini, Nuke</strong>, 3DEqualizer, Clarisse, etc."
    },
    {
      "category": "Databases",
      "list": "PostgreSQL, Cassandra, Redshift, Sqlite, MySQL, etc."
    },
    {
      "category": "Mathematics",
      "list": "<strong>Geometry, Topology, Numerical Analysis, Statistics</strong>, etc."
    },
    {
      "category": "Operating Systems",
      "list": "Linux, Windows."
    },
    {
      "category": "Machine Learning",
      "list": "TensorFlow."
    },
    {
      "category": "Autonomous Vehicles",
      "list": "Drones, Sensor Fusion."
    }
  ];

  let works = 
  [
    {
      "dates": "Nov. 2020–Now",
      "title": "R&D Software Developer",
      "company": "Animal Logic",
      "location": "Remote (IT)",
      "description": "Development of in-house procedural geometry and simulation tools.",
      "tools": "C++, Python, Houdini, Intel TBB."
    },
    {
      "dates": "Mar. 2018–Apr. 2020",
      "title": "R&D Software Developer",
      "company": "DNEG",
      "location": "London (UK)",
      "description": "Development of in-house grooming tools.",
      "tools": "C++, Python, Houdini, Maya, Qt, Intel TBB, OpenGL."
    },
    {
      "dates": "Jan. 2017–Mar. 2018",
      "title": "Pipeline TD",
      "company": "Framestore",
      "location": "London (UK)",
      "description": "Development of many pipeline tools.",
      "tools": "Python, 3DEqualizer, Nuke, Houdini, Maya, Qt."
    },
    {
      "dates": "Oct. 2012–Dec. 2016",
      "title": "Software Engineer",
      "company": "Exemplar",
      "location": "Torino (IT)",
      "description": "Development of a CAE pre- and post- processor.",
      "tools": "C++, Qt, Python, OpenCASCADE, Gmsh, OpenGL."
    }
  ];

  let education =
  [
    {
      "dates": "2009–2012",
      "course": "Master of Science in Mathematics",
      "school": "Università degli studi di Torino",
      "vote": "110/110"
    },
    {
      "dates": "2004–2007",
      "course": "Bachelor of Cinema and Media Engineering",
      "school": "Politecnico di Torino",
      "vote": "110/110 Cum Laude"
    },
    {
      "dates": "1999–2004",
      "course": "High School Diploma",
      "school": "Liceo scientifico Amedeo Avogadro di Vercelli",
      "vote": "100/100"
    }
  ];
</script>


<style>
  h2 {
    margin-top: 48px;
    margin-bottom: 24px;
  }
</style>

<svelte:head>
  <title>Curriculum Vitae</title>
</svelte:head>

<h1>Curriculum Vitae</h1>

<h2>Skills</h2>

{#each skills as skill}
  <SkillItem {...skill} />
{/each}

<h2>Work Experience</h2>

{#each works as work}
  <WorkItem {...work} />
{/each}

<h2>Publications</h2>

<p>I contributed to a paper on <strong>Topological Data Analysis</strong> after my graduation called <a href="https://arxiv.org/abs/1210.1932">A presentation of general multipersistence modules computable in polynomial time?</a> and published a Production talk at Siggraph 2020 called <a href="https://dl.acm.org/doi/10.1145/3388767.3407351">Hair and Fur in an Evolving Pipeline.</a></p>

<h2>Education</h2>

{#each education as edu}
  <EduItem {...edu} />
{/each}

<h2>Other Courses</h2>

<p>I took a couple of (in-person) <strong>cinematography courses</strong> at London Film Academy. I took many online courses on many topics including Linux tools, Maya, PRMan, Nuke, Katana, Computer Architecture, Computer Science, Robotics, Data Engineering, etc. from platforms like FXPHD, Coursera, EdX, etc. I obtained certificates for the <a href="https://confirm.udacity.com/SAHCHLHS">Flying Car and Autonomous Flight Engineering Nanodegree</a>, <a href="https://confirm.udacity.com/ZQV7K5UM">Sensor Fusion Engineer Nanodegree</a> and <a href="https://s3.amazonaws.com/verify.edx.org/downloads/bedbf9749e094590b5a68dfdd03dc012/Certificate.pdf">Introduction to Linux</a>.</p>

<h2>Open Source</h2>

<p>During college I contributed to the open source project <a href="https://gephi.org/">Gephi</a>. For the project I participated twice to the Google Summer of Code: in 2010 as a student and in 2011 as a mentor.</p>
