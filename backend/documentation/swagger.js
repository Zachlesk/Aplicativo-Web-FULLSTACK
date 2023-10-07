
const swaggerDocumentacion = {
    definition: {
        openapi: "3.0.0",
    info: {
      title: "API de Mariposario Celestialfly",
      description: "API de almacenamiento de datos de un mariposario ubicado en Colombia",
      version: "1.0.0",
    },
    servers: [
        {
          url: "http://localhost:8020",
          description: "URL de la API",
        },
      ],
      paths: {
        "/mariposas/all": {
          get: {
            summary: "Obtener todas las mariposas que residen en el mariposario",
            description: "Retorna las mariposas que estan en la base de datos de la residencia de mariposas.",
            tags: ["Mariposas"],
            responses: {
              "200": {
                description: "¡Ha sido exitoso!",
                content: {
                  "application/json": {
                    schema: {
                      type: "array",
                      items: {
                        $ref: "#/components/schemas/Mariposas"
                      }
                    }
                  }
                }
              },
              "404": {
                description: "El servidor fallara y se tendra que iniciar de nuevo",
              }
            }
          }
        },
        "/mariposas/one/{id}": {
            get: {
              summary: "Obtener una mariposa por el ID asignada como llave primaria",
              description: "Obtener una mariposa del mariposario del registro de la base de datos por su ID de llave primaria.",
              tags: ["Mariposas"],
              parameters: [
                {
                  in: "path",
                  name: "id",
                  required: true,
                  schema: {
                    type: "string",
                    format: "objectId"
                  },
                  description: "El ID de llave primaria de la mariposa a buscar"
                }
              ],
              responses: {
                "204": {
                  description: "Mariposa encontrada"
                }
              }
            }
          },
        "/mariposas/add": {
          post: {
            summary: "Ingresar una nueva mariposa a la colección",
            description: "Adjunta una nueva mariposa que entró al mariposario.",
            tags: ["Mariposas"],
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Mariposas"
                  }
                }
              }
            },
            responses: {
              "201": {
                description: "Mariposa creada exitosamente",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/Mariposas"
                    }
                  }
                }
              }
            }
          }
        },
        "/mariposas/delete/{id}": {
          delete: {
            summary: "Eliminar una mariposa por el ID asignada como llave primaria",
            description: "Elimina una mariposa del mariposario del registro de la base de datos por su ID de llave primaria.",
            tags: ["Mariposas"],
            parameters: [
              {
                in: "path",
                name: "id",
                required: true,
                schema: {
                  type: "string",
                  format: "objectId"
                },
                description: "El ID de llave primaria de la mariposa a eliminar"
              }
            ],
            responses: {
              "204": {
                description: "Mariposa eliminada exitosamente"
              }
            }
          }
        },
        "/mariposas/update/{id}": {
          put: {
            summary: "Actualizar y agregar nueva información a una mariposa por su id",
            description: "Actualiza una mariposa en la base de datos por su id único.",
            tags: ["Mariposas"],
            parameters: [
              {
                in: "path",
                name: "id",
                required: true,
                schema: {
                  type: "string",
                  format: "objectId"
                },
                description: "El ID de llave primaria de la mariposa a actualizar"
              }
            ],
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Mariposas"
                  }
                }
              }
            },
            responses: {
              "200": {
                description: "Mariposa actualizada exitosamente",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/Mariposas"
                    }
                  }
                }
              }
            }
          }
        },
        "/alimentacion/all": {
            get: {
              summary: "Obtener todas las alimentaciones que sirven para las mariposas en el mariposario",
              description: "Retorna las alimentaciones que estan en la base de datos de la residencia de mariposas.",
              tags: ["Alimentacion"],
              responses: {
                "200": {
                  description: "¡Ha sido exitoso!",
                  content: {
                    "application/json": {
                      schema: {
                        type: "array",
                        items: {
                          $ref: "#/components/schemas/Alimentacion"
                        }
                      }
                    }
                  }
                },
                "404": {
                  description: "El servidor fallara y se tendra que iniciar de nuevo",
                }
              }
            }
          },
          "/alimentacion/one/{id}": {
              get: {
                summary: "Obtener un alimento por el ID asignada como llave primaria",
                description: "Obtener un alimento del mariposario del registro de la base de datos por su ID de llave primaria.",
                tags: ["Alimentacion"],
                parameters: [
                  {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: {
                      type: "string",
                      format: "objectId"
                    },
                    description: "El ID de llave primaria del alimento a buscar"
                  }
                ],
                responses: {
                  "204": {
                    description: "Alimento encontrada"
                  }
                }
              }
            },
          "/alimentacion/add": {
            post: {
              summary: "Ingresar un nuevo alimento a la colección",
              description: "Adjunta un nuevo alimento que entró al mariposario.",
              tags: ["Alimentacion"],
              requestBody: {
                required: true,
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/Alimentacion"
                    }
                  }
                }
              },
              responses: {
                "201": {
                  description: "Alimento creado exitosamente",
                  content: {
                    "application/json": {
                      schema: {
                        $ref: "#/components/schemas/Alimentacion"
                      }
                    }
                  }
                }
              }
            }
          },
          "/alimentacion/delete/{id}": {
            delete: {
              summary: "Eliminar un alimento por el ID asignada como llave primaria",
              description: "Elimina un alimento del mariposario del registro de la base de datos por su ID de llave primaria.",
              tags: ["Alimentacion"],
              parameters: [
                {
                  in: "path",
                  name: "id",
                  required: true,
                  schema: {
                    type: "string",
                    format: "objectId"
                  },
                  description: "El ID de llave primaria del alimento a eliminar"
                }
              ],
              responses: {
                "204": {
                  description: "Alimento eliminado exitosamente"
                }
              }
            }
          },
          "/alimentacion/update/{id}": {
            put: {
              summary: "Actualizar y agregar nueva información a un alimento por su id",
              description: "Actualiza un alimento en la base de datos por su ID único.",
              tags: ["Alimentacion"],
              parameters: [
                {
                  in: "path",
                  name: "id",
                  required: true,
                  schema: {
                    type: "string",
                    format: "objectId"
                  },
                  description: "El ID de llave primaria del alimento a actualizar"
                }
              ],
              requestBody: {
                required: true,
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/Alimentacion"
                    }
                  }
                }
              },
              responses: {
                "200": {
                  description: "Alimento actualizado exitosamente",
                  content: {
                    "application/json": {
                      schema: {
                        $ref: "#/components/schemas/Alimentacion"
                      }
                    }
                  }
                }
              }
            }
          },
          "/jaulas/all": {
            get: {
              summary: "Obtener todas las jaulas que sirven para las mariposas en el mariposario",
              description: "Retorna las jaulas que estan en la base de datos de la residencia de mariposas.",
              tags: ["Jaulas"],
              responses: {
                "200": {
                  description: "¡Ha sido exitoso!",
                  content: {
                    "application/json": {
                      schema: {
                        type: "array",
                        items: {
                          $ref: "#/components/schemas/Jaulas"
                        }
                      }
                    }
                  }
                },
                "404": {
                  description: "El servidor fallará y se tendra que iniciar de nuevo",
                }
              }
            }
          },
          "/jaulas/one/{id}": {
              get: {
                summary: "Obtener una jaula por el ID asignada como llave primaria",
                description: "Obtener una jaula del mariposario del registro de la base de datos por su ID de llave primaria.",
                tags: ["Jaulas"],
                parameters: [
                  {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: {
                      type: "string",
                      format: "objectId"
                    },
                    description: "El ID de llave primaria de la jaula a buscar"
                  }
                ],
                responses: {
                  "204": {
                    description: "Jaula encontrada"
                  }
                }
              }
            },
          "/jaulas/add": {
            post: {
              summary: "Ingresar una nueva jaula a la colección",
              description: "Adjunta una nueva jaula que se creo para el mariposario.",
              tags: ["Jaulas"],
              requestBody: {
                required: true,
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/Jaulas"
                    }
                  }
                }
              },
              responses: {
                "201": {
                  description: "Jaula creada exitosamente",
                  content: {
                    "application/json": {
                      schema: {
                        $ref: "#/components/schemas/Jaulas"
                      }
                    }
                  }
                }
              }
            }
          },
          "/jaulas/delete/{id}": {
            delete: {
              summary: "Eliminar una jaula por el ID asignada como llave primaria",
              description: "Elimina una jaula del mariposario del registro de la base de datos por su ID de llave primaria.",
              tags: ["Jaulas"],
              parameters: [
                {
                  in: "path",
                  name: "id",
                  required: true,
                  schema: {
                    type: "string",
                    format: "objectId"
                  },
                  description: "El ID de llave primaria de la jaula a eliminar"
                }
              ],
              responses: {
                "204": {
                  description: "Jaula eliminada exitosamente"
                }
              }
            }
          },
          "/jaulas/update/{id}": {
            put: {
              summary: "Actualizar y agregar nueva información a una jaula por su id",
              description: "Actualiza una jaula en la base de datos por su ID único.",
              tags: ["Jaulas"],
              parameters: [
                {
                  in: "path",
                  name: "id",
                  required: true,
                  schema: {
                    type: "string",
                    format: "objectId"
                  },
                  description: "El ID de llave primaria de la jaula a actualizar"
                }
              ],
              requestBody: {
                required: true,
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/Jaulas"
                    }
                  }
                }
              },
              responses: {
                "200": {
                  description: "Jaula actualizada exitosamente",
                  content: {
                    "application/json": {
                      schema: {
                        $ref: "#/components/schemas/Jaulas"
                      }
                    }
                  }
                }
              }
            }
          },
          "/observaciones/all": {
            get: {
              summary: "Obtener todas las observaciones que se hicieron acerca del mariposario",
              description: "Retorna las observaciones que estan en la base de datos sobre la residencia de mariposas.",
              tags: ["Observaciones"],
              responses: {
                "200": {
                  description: "¡Ha sido exitoso!",
                  content: {
                    "application/json": {
                      schema: {
                        type: "array",
                        items: {
                          $ref: "#/components/schemas/Observaciones"
                        }
                      }
                    }
                  }
                },
                "404": {
                  description: "El servidor fallará y se tendra que iniciar de nuevo",
                }
              }
            }
          },
          "/observaciones/one/{id}": {
              get: {
                summary: "Obtener una observacion por el ID asignada como llave primaria",
                description: "Obtener una observacion sobre el mariposario del registro de la base de datos por su ID de llave primaria.",
                tags: ["Observaciones"],
                parameters: [
                  {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: {
                      type: "string",
                      format: "objectId"
                    },
                    description: "El ID de llave primaria de la observacion a buscar"
                  }
                ],
                responses: {
                  "204": {
                    description: "Observacion encontrada"
                  }
                }
              }
            },
          "/observaciones/add": {
            post: {
              summary: "Ingresar una nueva observación a la colección",
              description: "Adjunta una nueva observación que se creo para el mariposario.",
              tags: ["Observaciones"],
              requestBody: {
                required: true,
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/Observaciones"
                    }
                  }
                }
              },
              responses: {
                "201": {
                  description: "Observación creada exitosamente",
                  content: {
                    "application/json": {
                      schema: {
                        $ref: "#/components/schemas/Observaciones"
                      }
                    }
                  }
                }
              }
            }
          },
          "/observaciones/delete/{id}": {
            delete: {
              summary: "Eliminar una observacion por el ID asignada como llave primaria",
              description: "Elimina una observacion sobre el mariposario del registro de la base de datos por su ID de llave primaria.",
              tags: ["Observaciones"],
              parameters: [
                {
                  in: "path",
                  name: "id",
                  required: true,
                  schema: {
                    type: "string",
                    format: "objectId"
                  },
                  description: "El ID de llave primaria de la observacion a eliminar"
                }
              ],
              responses: {
                "204": {
                  description: "Observación eliminada exitosamente"
                }
              }
            }
          },
          "/observaciones/update/{id}": {
            put: {
              summary: "Actualizar y agregar nueva información a una observación por su id",
              description: "Actualiza una observación en la base de datos por su ID único.",
              tags: ["Observaciones"],
              parameters: [
                {
                  in: "path",
                  name: "id",
                  required: true,
                  schema: {
                    type: "string",
                    format: "objectId"
                  },
                  description: "El ID de llave primaria de la observación a actualizar"
                }
              ],
              requestBody: {
                required: true,
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/Observaciones"
                    }
                  }
                }
              },
              responses: {
                "200": {
                  description: "Observación actualizada exitosamente",
                  content: {
                    "application/json": {
                      schema: {
                        $ref: "#/components/schemas/Observaciones"
                      }
                    }
                  }
                }
              }
            }
          },
          "/visitantes/all": {
            get: {
              summary: "Obtener todas los visitantes que fueron al mariposario",
              description: "Retorna los visitantes que estan en la base de datos de la residencia de mariposas.",
              tags: ["Visitantes"],
              responses: {
                "200": {
                  description: "¡Ha sido exitoso!",
                  content: {
                    "application/json": {
                      schema: {
                        type: "array",
                        items: {
                          $ref: "#/components/schemas/Visitantes"
                        }
                      }
                    }
                  }
                },
                "404": {
                  description: "El servidor fallará y se tendra que iniciar de nuevo",
                }
              }
            }
          },
          "/visitantes/one/{id}": {
              get: {
                summary: "Obtener un visitante por el ID asignada como llave primaria",
                description: "Obtener un visitante del mariposario del registro de la base de datos por su ID de llave primaria.",
                tags: ["Visitantes"],
                parameters: [
                  {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: {
                      type: "string",
                      format: "objectId"
                    },
                    description: "El ID de llave primaria del visitante a buscar"
                  }
                ],
                responses: {
                  "204": {
                    description: "Visitante encontrado"
                  }
                }
              }
            },
          "/visitantes/add": {
            post: {
              summary: "Ingresar un nuevo visitante a la colección",
              description: "Adjunta un nuevo visitante que visitó  para el mariposario.",
              tags: ["Visitantes"],
              requestBody: {
                required: true,
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/Visitantes"
                    }
                  }
                }
              },
              responses: {
                "201": {
                  description: "Visitante agregado exitosamente",
                  content: {
                    "application/json": {
                      schema: {
                        $ref: "#/components/schemas/Visitantes"
                      }
                    }
                  }
                }
              }
            }
          },
          "/visitantes/delete/{id}": {
            delete: {
              summary: "Eliminar un visitante por el ID asignada como llave primaria",
              description: "Elimina un visitante del mariposario del registro de la base de datos por su ID de llave primaria.",
              tags: ["Visitantes"],
              parameters: [
                {
                  in: "path",
                  name: "id",
                  required: true,
                  schema: {
                    type: "string",
                    format: "objectId"
                  },
                  description: "El ID de llave primaria del visitante a eliminar"
                }
              ],
              responses: {
                "204": {
                  description: "Visitante eliminado exitosamente"
                }
              }
            }
          },
          "/visitantes/update/{id}": {
            put: {
              summary: "Actualizar y agregar nuevo visitante por su id",
              description: "Actualiza un visitante en la base de datos por su ID único.",
              tags: ["Visitantes"],
              parameters: [
                {
                  in: "path",
                  name: "id",
                  required: true,
                  schema: {
                    type: "string",
                    format: "objectId"
                  },
                  description: "El ID de llave primaria del visitante a actualizar"
                }
              ],
              requestBody: {
                required: true,
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/Visitantes"
                    }
                  }
                }
              },
              responses: {
                "200": {
                  description: "Visitante actualizado exitosamente",
                  content: {
                    "application/json": {
                      schema: {
                        $ref: "#/components/schemas/Visitantes"
                      }
                    }
                  }
                }
              }
            }
          },
      },
      components: {
        schemas: {
          Alimentacion: {
            type: "object",
            properties: {
              nombre: {
                type: "string",
                description: "El nombre del alimento que consumen",
                example: "Néctar de Flores"
              },
              tipo: {
                type: "string",
                description: "Tipo de alimento en su estado para las mariposas",
                example: "Liquido"
              },
              descripcion: {
                type: "string",
                description: "Descripción general del alimento que consumen las mariposas",
                example: "Alimento principal para muchas especies de mariposas, extraído de flores."
              },
              disponibilidad: {
                type: "string",
                description: "Si tiene disponibilidad en el mariposario especificamente",
                example: "Estacional"
              },
              fuente: {
                type: "string",
                description: "El origen de donde proviene el alimento",
                example: "Flores variadas que producen polen"
              },
            }
          },
          Jaulas: {
            type: "object",
            properties: {
              nombre: {
                type: "string",
                description: "El nombre del que reside la jaula que está ubicado en el mariposario",
                example: "Jaula Principal"
              },
              descripcion: {
                type: "string",
                description: "Descripción general de la jaula para conocer especificaciones",
                example: "La jaula principal del mariposario, con una gran variedad de mariposas."
              },
              capacidad: {
                type: "int",
                description: "Capacidad total de mariposas de la jaula ",
                example: "101"
              },
              temperatura: {
                type: "string",
                description: "La temperatura a la que ocila la jaula",
                example: "25°C - 30°C"
              }
            }
          },
          Mariposas: {
            type: "object",
            properties: {
              nombre_comun: {
                type: "string",
                description: "Nombre comun que se le conoce a la mariposa",
                example: "Mariposa Monarca"
              },
              nombre_cientifico: {
                type: "string",
                description: "Nombre cientifico latin de la mariposa en cuestión",
                example: "Danaus plexippus"
              },
              descripcion: {
                type: "string",
                description: "Descripción general de la mariposa",
                example: "Una mariposa naranja y negra con un patrón de manchas blancas."
              },
              imagen: {
                type: "string",
                description: "URL directo de la imagen de la mariposa",
                example: "https://inaturalist-open-data.s3.amazonaws.com/photos/219936/large.jpg"
              },
              habitat: {
                type: "string",
                description: "Habitat donde residen las mariposas en entorno natural",
                example: "Asia"
              },
              distribucion: {
                type: "string",
                description: "Lugares donde se distribuyen este tipo de mariposas",
                example: "India, Sri Lanka, Sudeste Asiático"
              },
              jaula: {
                type: "string",
                format: "objectId",
                description: "El identificador del nombre de la jaula traido de la colección jaulas",
                example: "6512da4449ec626aed69a4ae"
              },
              alimentacion: {
                type: "string",
                format: "objectId",
                description: "El identificador del nombre de la alimentacion traido de la colección alimentacion",
                example: "6512db4449ec626aed69a4ba"
              }
            }
          },
          Observaciones: {
            type: "object",
            properties: {
              fecha: {
                type: "date",
                description: "Fecha donde se hizo efectiva la observaciones segun el observador",
                example: "2023-09-01T00:00:00.000+00:00"
              },
              observador: {
                type: "string",
                format: "objectId",
                description: "El identificador del nombre del observador traido de la colección visitantes",
                example: "651c703d461385a9bcdef78c"
              }
            }
          },
          Visitantes: {
            type: "object",
            properties: {
              nombre: {
                type: "string",
                description: "Nombre del visitante del mariposario",
                example: "Ana García"
              },
              correo: {
                type: "string",
                description: "Correo electrónico del visitante",
                example: "ana@email.com"
              },
              fecha_visita: {
                type: "date",
                description: "Dia donde el visitante efectúo su presencia en el mariposario",
                example: "2023-09-01T00:00:00.000+00:00"
              },
              edad: {
                type: "int",
                description: "Edad del visitante",
                example: "25"
              },
              ciudad: {
                type: "string",
                description: "Ciudad residente del visitante",
                example: "Bucaramanga"
              },
              telefono: {
                type: "int",
                description: "Telefono del visitante",
                example: "1234567890"
              }
            }
          }
        }
      }
    },
    apis: [
        "./routes/alimentacion.routes.js",
        "./routes/jaulas.routes.js",
        "./routes/mariposas.routes.js",
        "./routes/observaciones.routes.js",
        "./routes/visitantes.routes.js"
    ],
  };
  
  export default swaggerDocumentacion;
  
