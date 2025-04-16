import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        backgroundMask: {
          enable: true,
          cover: {
            color: {
              value: "#000"
            }
          }
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "bubble",
              parallax: {
                enable: true,
                force: 60,
                smooth: 10
              }
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 10,
            },
            bubble: {
              distance: 200,
              size: 12,
              duration: 2,
              opacity: 0.8,
              speed: 3
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            attract: {
              distance: 200,
              duration: 0.4,
              factor: 5
            },
            trail: {
              delay: 0.005,
              quantity: 5,
              particles: {
                color: {
                  value: "#ff0000",
                  animation: {
                    enable: true,
                    speed: 20,
                    sync: true
                  }
                },
                collisions: {
                  enable: false
                },
                links: {
                  enable: false
                },
                move: {
                  outMode: "destroy",
                  speed: 5
                },
                size: {
                  value: 1,
                  animation: {
                    enable: true,
                    speed: 5,
                    minimumValue: 1,
                    sync: true,
                    startValue: "min",
                    destroy: "max"
                  }
                }
              }
            }
          },
        },
        particles: {
          groups: {
            tinyStars: {
              number: {
                value: 300
              },
              color: {
                value: ["#ffffff", "#f0f8ff", "#f5f5dc", "#e6e6fa"]
              },
              shape: {
                type: "circle"
              },
              opacity: {
                value: { min: 0.1, max: 0.5 },
                random: true,
                animation: {
                  enable: true,
                  speed: 0.5,
                  minimumValue: 0.1,
                  sync: false
                }
              },
              size: {
                value: { min: 0.1, max: 1 },
                random: true
              },
              move: {
                enable: true,
                speed: 0.5,
                random: true,
                direction: "none",
                outMode: "out"
              },
              twinkle: {
                particles: {
                  enable: true,
                  frequency: 0.05,
                  opacity: 1
                }
              }
            },
            smallStars: {
              number: {
                value: 150
              },
              color: {
                value: ["#ffffff", "#FFD700", "#F8F8FF", "#1E90FF", "#B22222", "#7B68EE", "#00FFFF"]
              },
              shape: {
                type: "circle"
              },
              opacity: {
                value: { min: 0.3, max: 0.8 },
                random: true,
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 0.1,
                  sync: false
                }
              },
              size: {
                value: { min: 1, max: 3 },
                random: true,
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 0.5,
                  sync: false
                }
              },
              move: {
                enable: true,
                speed: 1,
                random: true,
                direction: "none",
                outMode: "bounce"
              },
              twinkle: {
                particles: {
                  enable: true,
                  frequency: 0.05,
                  opacity: 1
                }
              }
            },
            mediumStars: {
              number: {
                value: 50
              },
              color: {
                value: ["#ffffff", "#FFD700", "#F8F8FF", "#1E90FF", "#B22222", "#7B68EE", "#00FFFF"]
              },
              shape: {
                type: ["circle", "star"]
              },
              opacity: {
                value: { min: 0.5, max: 1 },
                random: true
              },
              size: {
                value: { min: 3, max: 5 },
                random: true
              },
              move: {
                enable: true,
                speed: 0.8,
                random: true,
                direction: "none",
                outMode: "bounce"
              },
              twinkle: {
                particles: {
                  enable: true,
                  frequency: 0.1,
                  opacity: 1
                }
              },
              shadow: {
                enable: true,
                color: "#000000",
                blur: 5,
                offset: {
                  x: 0,
                  y: 0
                }
              }
            },
            largeStars: {
              number: {
                value: 15
              },
              color: {
                value: ["#ffffff", "#FFD700", "#F8F8FF", "#1E90FF", "#B22222", "#7B68EE", "#00FFFF"]
              },
              shape: {
                type: "star"
              },
              opacity: {
                value: 1
              },
              size: {
                value: { min: 5, max: 8 },
                random: true
              },
              move: {
                enable: true,
                speed: 0.5,
                random: true,
                direction: "none",
                outMode: "bounce"
              },
              twinkle: {
                particles: {
                  enable: true,
                  frequency: 0.2,
                  opacity: 0.8
                }
              },
              shadow: {
                enable: true,
                color: "#000000",
                blur: 10,
                offset: {
                  x: 0,
                  y: 0
                }
              }
            },
            planets: {
              number: {
                value: 6
              },
              color: {
                value: ["#B22222", "#1E90FF", "#DAA520", "#32CD32", "#FF4500", "#9370DB", "#00CED1"]
              },
              shape: {
                type: "circle"
              },
              opacity: {
                value: 0.8
              },
              size: {
                value: { min: 8, max: 15 },
                random: true
              },
              move: {
                enable: true,
                speed: 0.3,
                direction: "none",
                random: true,
                straight: false,
                outMode: "bounce"
              },
              rotate: {
                value: 0,
                direction: "clockwise",
                animation: {
                  enable: true,
                  speed: 5,
                  sync: false
                }
              },
              shadow: {
                enable: true,
                color: "#000000",
                blur: 15,
                offset: {
                  x: 3,
                  y: 3
                }
              }
            },
            ringedPlanets: {
              number: {
                value: 2
              },
              color: {
                value: ["#DAA520", "#9370DB"]
              },
              shape: {
                type: "circle"
              },
              opacity: {
                value: 0.8
              },
              size: {
                value: { min: 12, max: 20 },
                random: true
              },
              move: {
                enable: true,
                speed: 0.2,
                direction: "none",
                random: true,
                straight: false,
                outMode: "bounce"
              },
              rotate: {
                value: 0,
                direction: "clockwise",
                animation: {
                  enable: true,
                  speed: 3,
                  sync: false
                }
              },
              roll: {
                darken: {
                  enable: true,
                  value: 30
                },
                enlighten: {
                  enable: true,
                  value: 30
                },
                enable: true,
                speed: {
                  min: 5,
                  max: 10
                }
              },
              shadow: {
                enable: true,
                color: "#000000",
                blur: 20,
                offset: {
                  x: 5,
                  y: 5
                }
              }
            },
            shootingStars: {
              number: {
                value: 8
              },
              color: {
                value: ["#ffffff", "#FFD700"]
              },
              shape: {
                type: "line"
              },
              opacity: {
                value: { min: 0.3, max: 0.8 },
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 0.1
                }
              },
              size: {
                value: { min: 1, max: 3 }
              },
              move: {
                enable: true,
                speed: { min: 10, max: 30 },
                direction: "bottom-right",
                straight: true,
                outMode: "out",
                trail: {
                  enable: true,
                  length: 10,
                  fillColor: "#000000"
                }
              },
              life: {
                duration: {
                  sync: false,
                  value: { min: 3, max: 8 }
                },
                count: 1
              }
            },
            nebula: {
              number: {
                value: 20
              },
              color: {
                value: ["#ff4500", "#9370db", "#00ced1", "#ff69b4", "#00bfff"],
                animation: {
                  enable: true,
                  speed: 20,
                  sync: false
                }
              },
              shape: {
                type: "circle"
              },
              opacity: {
                value: { min: 0.05, max: 0.2 },
                random: true
              },
              size: {
                value: { min: 30, max: 100 },
                random: true
              },
              move: {
                enable: true,
                speed: 0.1,
                direction: "none",
                random: true,
                straight: false,
                outMode: "out"
              },
              blur: {
                enable: true,
                value: 10
              }
            }
          },
          detectRetina: true,
          emitters: [
            {
              direction: "top-right",
              rate: {
                delay: 5,
                quantity: 1
              },
              position: {
                x: 0,
                y: 100
              },
              size: {
                width: 0,
                height: 0
              },
              particles: {
                move: {
                  angle: {
                    offset: 0,
                    value: 30
                  },
                  enable: true,
                  speed: 15,
                  direction: "top-right",
                  straight: true
                },
                number: {
                  value: 1
                },
                opacity: {
                  value: 1
                },
                shape: {
                  type: "line"
                },
                size: {
                  value: { min: 1, max: 3 },
                  animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 1,
                    sync: true,
                    startValue: "min",
                    destroy: "max"
                  }
                },
                life: {
                  duration: {
                    sync: true,
                    value: 5
                  },
                  count: 1
                }
              }
            },
            {
              direction: "top-left",
              rate: {
                delay: 8,
                quantity: 1
              },
              position: {
                x: 100,
                y: 100
              },
              size: {
                width: 0,
                height: 0
              },
              particles: {
                move: {
                  angle: {
                    offset: 0,
                    value: 150
                  },
                  enable: true,
                  speed: 15,
                  direction: "top-left",
                  straight: true
                },
                number: {
                  value: 1
                },
                opacity: {
                  value: 1
                },
                shape: {
                  type: "line"
                },
                size: {
                  value: { min: 1, max: 3 },
                  animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 1,
                    sync: true,
                    startValue: "min",
                    destroy: "max"
                  }
                },
                life: {
                  duration: {
                    sync: true,
                    value: 5
                  },
                  count: 1
                }
              }
            }
          ]
        }
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default ParticleBackground;
