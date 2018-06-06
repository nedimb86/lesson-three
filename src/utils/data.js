import faker from 'faker';

export const data = Array(50).fill(null).map(i => ({
  ...faker.helpers.createCard(),
  img: faker.image.avatar()
}));


export const sectionData = Array(5).fill(null).map(i => ({
  title: faker.company.companyName(),
  data: Array(faker.random.number(10)).fill(null).map(j=>({
    ...faker.helpers.createCard(),
    img: faker.image.avatar()
  }))
}));
