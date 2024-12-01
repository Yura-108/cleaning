import axios from "axios";

export const fetchServices = async () => {
  const response = await axios.get('http://localhost:3000/api/services');
  return response.data;
}

export const fetchCleaners = async () => {
  const response = await axios.get('http://localhost:3000/api/cleaners');
  return response.data;
}

export const fetchPremises = async () => {
  const response = await axios.get('http://localhost:3000/api/premises');
  return response.data;
}