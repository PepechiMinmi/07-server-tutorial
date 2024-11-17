export default async () => {
  // ランダム選択用関数
  const randomValueFromArray = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  // 配列にin
  const xItems = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
  const yItems = ["the soup kitchen", "Disneyland", "the White House"];
  const zItems = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away",
  ];

  // ランダムデータ
  const xItem = randomValueFromArray(xItems);
  const yItem = randomValueFromArray(yItems);
  const zItem = randomValueFromArray(zItems);

  // 温度と重さ
  const temperature = 94;
  const weight = 300;

  // 話
  const story = `It was ${temperature} fahrenheit outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. It was not surprising — ${xItem} weighs ${weight} pounds, and it was a hot day.`;

  // 帰す
  return new Response(story, {
    headers: { "Content-Type": "text/plain" },
  });
};
