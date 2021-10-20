const resolvers = {
    fetchPizas: async (data = {}, { db }) => {
      return [{
          name:'carbonara',
          description:'que facil que es',
          price:5.00,
          image:'carbonara.jpg'
      }]
    },
  
    fetchPiza: async (data, { db }) => {
      
    },
  
    createPiza: async ({ input }, { db }) => {
      console.log(input);
      return input
    },
  
    updatePiza: async ({ input }, { db }) => {
      
    },
  
    // this function is currently disabled.
    // destroyPizza: async (data, { db }) => {
    //   await db('todos').where('id', data.id).del();
    //   return Object.assign(data);
    // },
  };
  
  module.exports = resolvers;