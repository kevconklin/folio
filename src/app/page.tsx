import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden font-mono">
          <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 25% 25%, #0f1419 0%, transparent 50%), radial-gradient(circle at 75% 75%, #0f1419 0%, transparent 50%)'}}></div>
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-12 gap-px h-full">
                {Array.from({ length: 144 }).map((_, i) => (
                  <div key={i} className="border border-green-500/20"></div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-left relative z-10 max-w-4xl w-full mx-auto px-6">
            <div className="bg-gray-900/90 border border-green-500/30 rounded-lg p-8 shadow-2xl">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="ml-4 text-gray-400 text-sm">kevin@deloitte:~$</div>
              </div>
              
              <div className="space-y-3 text-green-400">
                <div className="flex items-center gap-3">
                  <span className="text-gray-500">$</span> 
                  <span className="text-gray-400 text-sm">Who am I?</span>
                </div>
                <div className="text-4xl md:text-6xl font-bold text-green-400 mb-4">
                  Kevin Conklin
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-gray-500">$</span> 
                  <span className="text-gray-400 text-sm">What do I do?</span>
                </div>
                <div className="text-xl text-green-300 mb-4">
                  Technical Manager | AI Innovation Lead @ Deloitte
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-gray-500">$</span> 
                  <span className="text-gray-400 text-sm">My experience:</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">5+</div>
                    <div className="text-xs text-gray-400">AI Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">M.S.</div>
                    <div className="text-xs text-gray-400">Business Analytics</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-400">AWS</div>
                    <div className="text-xs text-gray-400">Cloud Certified</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">AI/ML</div>
                    <div className="text-xs text-gray-400">Specialist</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-gray-500">$</span> 
                  <span className="text-gray-400 text-sm">Quick navigation:</span>
                </div>
                <div className="flex flex-wrap gap-4 mb-6">
                  <a
                    href="#projects"
                    className="bg-green-600/20 border border-green-500/50 text-green-400 px-6 py-3 rounded font-semibold hover:bg-green-600/30 hover:border-green-400 transition-all duration-300"
                  >
                    View My Projects →
                  </a>
                  <a
                    href="#contact"
                    className="border border-cyan-500/50 text-cyan-400 px-6 py-3 rounded font-semibold hover:bg-cyan-600/20 hover:border-cyan-400 transition-all duration-300"
                  >
                    Get In Touch →
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-gray-500">$</span> 
                  <span className="text-gray-400 text-sm">Technologies I use:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-gray-800 border border-gray-600 px-2 py-1 rounded text-gray-300">Python</span>
                  <span className="text-xs bg-gray-800 border border-gray-600 px-2 py-1 rounded text-gray-300">React</span>
                  <span className="text-xs bg-gray-800 border border-gray-600 px-2 py-1 rounded text-gray-300">AWS</span>
                  <span className="text-xs bg-gray-800 border border-gray-600 px-2 py-1 rounded text-gray-300">Docker</span>
                  <span className="text-xs bg-gray-800 border border-gray-600 px-2 py-1 rounded text-gray-300">Generative AI</span>
                </div>
              </div>
              
              <div className="mt-4 text-green-500">
                <span className="animate-pulse">█</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-black font-mono relative overflow-hidden">
          <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-16 gap-px h-full">
                {Array.from({ length: 256 }).map((_, i) => (
                  <div key={i} className="border border-green-500/10"></div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gray-900/90 border border-green-500/30 rounded p-6 mb-8">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="ml-4 text-gray-400 text-sm">kevin@deloitte:~/about$</div>
                </div>
                
                <div className="space-y-4 text-green-400">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-500">$</span> 
                    <span className="text-gray-400 text-sm">About me:</span>
                  </div>
                  <div className="text-sm text-green-300 leading-relaxed pl-4 border-l border-green-500/30">
                    I am a Technical Manager and Developer leading Generative AI initiatives within Deloitte&apos;s Government & Public Services practice. My focus is delivering secure, intuitive solutions that exceed client expectations while developing top-level talent. As a trusted cloud architect, I provide expert guidance on cloud security, AI development, and resilient cloud architectures. By prioritizing DevOps and continuous learning, I cultivate high-performing teams that remain at the forefront of the evolving AI landscape.
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-900/90 border border-cyan-500/30 rounded p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="ml-4 text-gray-400 text-sm">skills.json</div>
                  </div>
                  
                  <div className="space-y-3 text-cyan-400">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-500">$</span> 
                      <span className="text-gray-400 text-sm">My skills & expertise:</span>
                    </div>
                    <div className="text-sm">
                      <div className="text-yellow-400">&#123;</div>
                      <div className="pl-4">
                        <div className="text-cyan-300">&quot;technical_leadership&quot;: <span className="text-green-300">true</span>,</div>
                        <div className="text-cyan-300">&quot;languages&quot;: [</div>
                        <div className="pl-4">
                          {[
                            'JavaScript',
                            'Python'
                          ].map((skill) => (
                            <div key={skill} className="text-green-300">&quot;{skill.toLowerCase()}&quot;,</div>
                          ))}
                        </div>
                        <div className="text-cyan-300">],</div>
                        <div className="text-cyan-300">&quot;frameworks&quot;: [</div>
                        <div className="pl-4">
                          {[
                            'React',
                            'Docker'
                          ].map((skill) => (
                            <div key={skill} className="text-green-300">&quot;{skill.toLowerCase()}&quot;,</div>
                          ))}
                        </div>
                        <div className="text-cyan-300">],</div>
                        <div className="text-cyan-300">&quot;cloud&quot;: [</div>
                        <div className="pl-4">
                          {[
                            'AWS',
                            'Google Cloud'
                          ].map((skill) => (
                            <div key={skill} className="text-green-300">&quot;{skill.toLowerCase().replace(' ', '_')}&quot;,</div>
                          ))}
                        </div>
                        <div className="text-cyan-300">],</div>
                        <div className="text-cyan-300">&quot;big_data&quot;: [&quot;kafka&quot;, &quot;spark&quot;]</div>
                      </div>
                      <div className="text-yellow-400">&#125;</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-900/90 border border-purple-500/30 rounded p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="ml-4 text-gray-400 text-sm">education.log</div>
                  </div>
                  
                  <div className="space-y-3 text-purple-400">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-500">$</span> 
                      <span className="text-gray-400 text-sm">My education:</span>
                    </div>
                    <div className="text-sm space-y-3">
                      <div className="bg-gray-800/50 border border-purple-500/20 rounded p-3">
                        <div className="text-purple-300 font-semibold">M.S in Business Analytics</div>
                        <div className="text-gray-400">Arizona State University</div>
                        <div className="text-xs text-green-400 mt-1">[COMPLETED] ✓</div>
                      </div>
                      <div className="bg-gray-800/50 border border-purple-500/20 rounded p-3">
                        <div className="text-purple-300 font-semibold">B.S in Mathematics</div>
                        <div className="text-gray-400">Arizona State University</div>
                        <div className="text-xs text-green-400 mt-1">[COMPLETED] ✓</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-black font-mono relative overflow-hidden">
          <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-20 gap-px h-full">
                {Array.from({ length: 400 }).map((_, i) => (
                  <div key={i} className="border border-cyan-500/10"></div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="bg-gray-900/90 border border-cyan-500/30 rounded p-6 mb-8">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="ml-4 text-gray-400 text-sm">kevin@deloitte:~/projects$</div>
                </div>
                
                <div className="space-y-4 text-cyan-400">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-500">$</span> 
                    <span className="text-gray-400 text-sm">Personal projects & articles:</span>
                  </div>
                  <div className="text-sm text-cyan-300 leading-relaxed pl-4 border-l border-cyan-500/30">
                    <span className="text-yellow-400">Note:</span> My primary focus is delivering exceptional results for clients at Deloitte. 
                    These personal projects represent explorations and tutorials I create during my free time between work and family commitments. 
                    They showcase my passion for AI innovation but are just a glimpse of my professional capabilities.
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: 1,
                  title: "How Do GenAI Models Evaluate Other Models?",
                  description: "A high level analysis of using Generative AI models to grade other Generative AI model outputs.",
                  image: "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*dpzzNYjCQCpeBpY5RHvo8A.jpeg",
                  technologies: ["genai", "python", "aws", "gcp", "anthropic", "openai"],
                  readUrl: "https://medium.com/@kevinconklin_17818/how-do-genai-models-grade-other-modeloutputs-e8d88d293e25"
                },
                {
                  id: 2,
                  title: "Using BigQuery as a Vector Store",
                  description: "A tutorial on how to use Google Cloud BigQuery as a Vector Store in RAG applications.",
                  image: "https://static-00.iconduck.com/assets.00/google-cloud-icon-2048x1646-7admxejz.png",
                  technologies: ["tutorial", "langchain", "gcp", "python"],
                  githubUrl: "https://github.com/kevconklin/bq_vector_store",
                  readUrl: "https://medium.com/@kevinconklin_17818/using-bigquery-as-a-vector-store-b1ca91371854"
                },
                {
                  id: 3,
                  title: "Build Card Game With GenAI",
                  description: "Walk through of using Bolt.new to build and deploy War Card game application in minutes.",
                  image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*B3MJURpInfgf3SboW1lcUA.png",
                  technologies: ["tutorial", "genai", "javascript"],
                  liveUrl: "https://storied-belekoy-839181.netlify.app/",
                  readUrl: "https://medium.com/@kevinconklin_17818/using-bolt-new-to-war-card-game-application-c963c8a87f6d"
                },
                {
                  id: 4,
                  title: "Simplify Testing Generative AI Systems",
                  description: "A simple way of testing subjective outputs of Generative AI systems.",
                  image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*aVf0XMwBjUrLy5SiMxBhDQ@2x.jpeg",
                  technologies: ["python", "genai", "tutorial"],
                  readUrl: "https://medium.com/@kevinconklin_17818/simplify-testing-fine-tuned-llms-and-prompts-e0a6c2cfcdbf"
                },
                {
                  id: 5,
                  title: "Quick Question",
                  description: "A pre-Generative AI application that outputs random questions to ask friends and family.",
                  image: "https://media.istockphoto.com/id/1349245500/vector/question-mark-icon-in-pink-speech-bubble-questions-sign.jpg?s=612x612&w=0&k=20&c=WROmUJbXxRuvj7uvxs_SLFwhEyo9i3Kf0XXfJqtW5g4=",
                  technologies: ["react", "javascript"],
                  liveUrl: "https://qq-delta.vercel.app/"
                }
              ].map((project) => (
                <div key={project.id} className="bg-gray-900/90 border border-green-500/30 rounded font-mono">
                  <div className="flex items-center p-3 border-b border-green-500/20">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="ml-4 text-gray-400 text-xs">project_{project.id}.md</div>
                  </div>
                  
                  <div className="p-4">
                    <div className="text-green-400 mb-3">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                        <span>$</span> 
                        <span>Project details:</span>
                      </div>
                      <h3 className="text-sm font-bold text-green-300 mb-2">
                        {project.title}
                      </h3>
                    </div>
                    
                    <div className="text-xs text-cyan-300 mb-3 leading-relaxed">
                      {project.description}
                    </div>
                    
                    <div className="mb-3">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                        <span>$</span> 
                        <span>Built with:</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="text-xs bg-gray-800/60 border border-gray-600/50 px-2 py-1 rounded text-orange-400">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 text-xs">
                      {project.readUrl && (
                        <a
                          href={project.readUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-600/20 border border-blue-500/50 text-blue-400 px-3 py-1 rounded hover:bg-blue-600/30 transition-all"
                        >
                          Read Article →
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-green-500/50 text-green-400 px-3 py-1 rounded hover:bg-green-600/20 transition-all"
                        >
                          View Live →
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-gray-500/50 text-gray-400 px-3 py-1 rounded hover:bg-gray-600/20 transition-all"
                        >
                          View Code →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-black font-mono relative overflow-hidden">
          <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-24 gap-px h-full">
                {Array.from({ length: 480 }).map((_, i) => (
                  <div key={i} className="border border-yellow-500/10"></div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-900/90 border border-yellow-500/30 rounded p-6 mb-8">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="ml-4 text-gray-400 text-sm">kevin@deloitte:~/contact$</div>
                </div>
                
                <div className="space-y-4 text-yellow-400">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-500">$</span> 
                    <span className="text-gray-400 text-sm">How to reach me:</span>
                  </div>
                </div>
              </div>
              
              <div className="max-w-2xl mx-auto">
                <div className="bg-gray-900/90 border border-cyan-500/30 rounded p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="ml-4 text-gray-400 text-sm">contact_info.json</div>
                  </div>
                  
                  <div className="space-y-4 text-cyan-400">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-500">$</span> 
                      <span className="text-gray-400 text-sm">Contact information:</span>
                    </div>
                    <div className="text-sm">
                      <div className="text-yellow-400">&#123;</div>
                      <div className="pl-4 space-y-3">
                        <div className="text-cyan-300">
                          &quot;email&quot;: &#123;
                          <div className="pl-4">
                            <a href="mailto:conklinradio@gmail.com" className="text-green-400 hover:text-green-300 transition-colors">
                              &quot;primary&quot;: &quot;conklinradio@gmail.com&quot;
                            </a>
                          </div>
                          &#125;,
                        </div>
                        <div className="text-cyan-300">
                          &quot;professional&quot;: &#123;
                          <div className="pl-4">
                            <a href="https://www.linkedin.com/in/kevinwconklin/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                              &quot;linkedin&quot;: &quot;/in/kevinwconklin&quot;
                            </a>
                          </div>
                          &#125;,
                        </div>
                        <div className="text-cyan-300">
                          &quot;content&quot;: &#123;
                          <div className="pl-4">
                            <a href="https://medium.com/@kevinconklin_17818" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 transition-colors">
                              &quot;medium&quot;: &quot;@kevinconklin_17818&quot;
                            </a>
                          </div>
                          &#125;,
                        </div>
                        <div className="text-cyan-300">
                          &quot;code&quot;: &#123;
                          <div className="pl-4">
                            <a href="https://github.com/kevconklin" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">
                              &quot;github&quot;: &quot;kevconklin&quot;
                            </a>
                          </div>
                          &#125;
                        </div>
                      </div>
                      <div className="text-yellow-400">&#125;</div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-cyan-500/20">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <span>$</span>
                        <span>Quick links:</span>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="text-gray-400">
                          <span className="text-green-400">Email:</span> conklinradio@gmail.com
                        </div>
                        <div className="text-gray-400">
                          <span className="text-blue-400">LinkedIn:</span> linkedin.com/in/kevinwconklin
                        </div>
                        <div className="text-gray-400">
                          <span className="text-orange-400">Articles:</span> medium.com/@kevinconklin_17818
                        </div>
                        <div className="text-gray-400">
                          <span className="text-purple-400">Code:</span> github.com/kevconklin
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black font-mono border-t border-green-500/20 py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/90 border border-gray-500/30 rounded p-6">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="ml-4 text-gray-400 text-sm">system_info.sh</div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 text-sm">
                <div className="text-gray-400">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-gray-500">$</span> 
                    <span className="text-sm">Portfolio info:</span>
                  </div>
                  <div className="text-green-400 mb-1">Kevin Conklin</div>
                  <div className="text-cyan-400 mb-4">AI Technical Leader @ Deloitte</div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-gray-500">$</span> 
                    <span className="text-sm">Built with:</span>
                  </div>
                  <div className="text-orange-400 mb-1">Next.js + Tailwind CSS</div>
                  <div className="text-orange-400 mb-1">January 2025</div>
                  <div className="text-orange-400 mb-4">Version 1.0</div>
                </div>
                
                <div className="text-gray-400">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-gray-500">$</span> 
                    <span className="text-sm">Connect with me:</span>
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="text-blue-400">
                      LinkedIn: <a href="https://www.linkedin.com/in/kevinwconklin/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">linkedin.com/in/kevinwconklin</a>
                    </div>
                    <div className="text-orange-400">
                      Articles: <a href="https://medium.com/@kevinconklin_17818" target="_blank" rel="noopener noreferrer" className="hover:text-orange-300">medium.com/@kevinconklin_17818</a>
                    </div>
                    <div className="text-purple-400">
                      Code: <a href="https://github.com/kevconklin" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300">github.com/kevconklin</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-600/30">
                <div className="flex justify-between items-center text-xs">
                  <div className="text-gray-500">
                    <span className="text-gray-500">$</span> echo &quot;© 2025 Kevin Conklin. All rights reserved.&quot;
                  </div>
                  <div className="text-gray-500">
                    <span className="text-green-400">●</span> System online
                  </div>
                </div>
                <div className="mt-2 text-xs text-gray-600">
                  Last login: {new Date().toLocaleDateString('en-US', { 
                    weekday: 'short', 
                    month: 'short', 
                    day: 'numeric', 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })} from deloitte.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
