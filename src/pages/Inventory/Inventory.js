import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Inventory = () => {
  const GraphData = () => {
    return {
      cuisine: {
        "Afghan": 1,
        "African": 1,
        "Andhra": 124,
        "Arab": 1,
        "Asian": 9,
        "Assamese": 26,
        "Awadhi": 41,
        "Bengali Recipes": 175,
        "Bihari": 24,
        "Chettinad": 72,
        "Chinese": 2,
        "Coastal Karnataka": 15,
        "Continental": 5,
        "Coorg": 15,
        "Fusion": 16,
        "Goan Recipes": 89,
        "Gujarati Recipes": 127,
        "Haryana": 3,
        "Himachal": 19,
        "Hyderabadi": 32,
        "Indian": 874,
        "Indo Chinese": 5,
        "Jharkhand": 2,
        "Karnataka": 136,
        "Kashmiri": 60,
        "Kerala Recipes": 170,
        "Kongunadu": 3,
        "Konkan": 32,
        "Korean": 1,
        "Lucknowi": 9,
        "Maharashtrian Recipes": 154,
        "Malabar": 11,
        "Malvani": 9,
        "Mangalorean": 45,
        "Middle Eastern": 8,
        "Mughlai": 31,
        "Nagaland": 5,
        "Nepalese": 5,
        "North East India Recipes": 20,
        "North Indian Recipes": 858,
        "North Karnataka": 15,
        "Oriya Recipes": 31,
        "Pakistani": 11,
        "Parsi Recipes": 40,
        "Punjabi": 87,
        "Rajasthani": 123,
        "Sichuan": 1,
        "Sindhi": 31,
        "South Indian Recipes": 667,
        "South Karnataka": 10,
        "Sri Lankan": 8,
        "Tamil Nadu": 170,
        "Thai": 1,
        "Udupi": 13,
        "Uttar Pradesh": 11,
        "Uttarakhand-North Kumaon ": 4
      },
      course: {
        "Appetizer": 91,
        "Brunch": 1,
        "Dessert": 392,
        "Dinner": 488,
        "Indian Breakfast": 85,
        "Lunch": 1741,
        "Main Course": 201,
        "North Indian Breakfast": 125,
        "One Pot Dish": 20,
        "Side Dish": 907,
        "Snack": 84,
        "South Indian Breakfast": 281,
        "World Breakfast": 8
      },
      diet: {
        "Diabetic Friendly": 253,
        "Eggetarian": 96,
        "Gluten Free": 38,
        "High Protein Non Vegetarian": 141,
        "High Protein Vegetarian": 539,
        "No Onion No Garlic (Sattvic)": 63,
        "Non Vegeterian": 252,
        "Vegan": 27,
        "Vegetarian": 3015
      }
    };
  };
  const CuisineChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
      const data = GraphData().cuisine;
      const labels = Object.keys(data);
      const values = Object.values(data);

      const ctx = chartRef.current.getContext('2d');

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Cuisine',
            data: values,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }, []);

    return <canvas ref={chartRef}></canvas>;
  };

  const CourseChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
      const data = GraphData().course;
      const labels = Object.keys(data);
      const values = Object.values(data);

      const ctx = chartRef.current.getContext('2d');

      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            label: 'Course',
            data: values,
            backgroundColor: ['#ffcd56', '#ff6384', '#36a2eb', '#fd6b19', '#90ee7e'],
            borderColor: 'white',
            borderWidth: 2
          }]
        }
      });
    }, []);

    return <canvas ref={chartRef}></canvas>;
  };

  const DietChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
      const data = GraphData().diet;
      const labels = Object.keys(data);
      const values = Object.values(data);

      const ctx = chartRef.current.getContext('2d');

      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: labels,
          datasets: [{
            label: 'Diet',
            data: values,
            backgroundColor: ['#4bc0c0', '#36a2eb', '#ffcd56', '#ff6384', '#fd6b19', '#90ee7e', '#ff9f40', '#9984d4', '#ffa07a'],
            borderColor: 'white',
            borderWidth: 2
          }]
        }
      });
    }, []);

    return <canvas ref={chartRef}></canvas>;
  };

  return (
    <div className="container">
      <div className="row">

        <div className="col-md-12">
          <div className="card mb-3">
            <div className="card-header text-center">
              <i className="bi bi-egg-fill text-warning text-uppercase fw-bold"></i> Kitchen Recipe <br/>Management System
            </div>
            <div className="card-body">
              <CuisineChart />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-header text-center">
              course
            </div>
            <div className="card-body">
              <CourseChart />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-header text-center">
              Diet
            </div>
            <div className="card-body">
              <DietChart />
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Inventory;
